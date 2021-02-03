import React, { FormEvent, useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherForm() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: "", to: "" }]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    // console.log(updatedScheduleItems);

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post("/classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert("Your form was submitted");
      })
      .catch(() => {
        alert("I could not submit your form");
      });

    console.log({
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      scheduleItems,
    });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="How amazing is that you want to share your knowledge."
        description="Please start by completing the form below."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>About you</legend>

            <Input
              name="name"
              label="Full Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Textarea
              name="bio"
              label="Bio"
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>About your classes</legend>

            <Select
              name="subject"
              label="Subject"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={[
                { value: "Artes", label: "Arts" },
                { value: "Biologia", label: "Biology" },
                { value: "Barista", label: "Barista" },
                { value: "Javascript", label: "Javascript" },
                { value: "Music", label: "Music" },
              ]}
            />
            <Input
              name="cost"
              label="Hourly rate "
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </fieldset>

          <fieldset>
            <legend>
              Available classes
              <button type="button" onClick={addNewScheduleItem}>
                + New availability
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Day"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, "week_day", e.target.value)
                    }
                    options={[
                      { value: "0", label: "Sunday" },
                      { value: "1", label: "Monday" },
                      { value: "2", label: "Tuesday" },
                      { value: "3", label: "Wednesday" },
                      { value: "4", label: "Thursday" },
                      { value: "5", label: "Friday" },
                      { value: "6", label: "Saturday" },
                    ]}
                  />
                  <Input
                    name="from"
                    label="From"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) => setScheduleItemValue(index, "from", e.target.value)}
                  />
                  <Input
                    name="to"
                    label="To"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) => setScheduleItemValue(index, "to", e.target.value)}
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Important Warning" />
              Important! <br />
              Please complete the entire form
            </p>
            <button type="submit">Submit form</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
