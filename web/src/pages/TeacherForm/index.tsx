import React, { useState } from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([{ week_day: 0, from: "", to: "" }]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="How amazing is that you want to share your knowledge."
        description="Please start by completing the form below."
      />

      <main>
        <fieldset>
          <legend>About you</legend>

          <Input name="name" label="Full Name" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="WhatsApp" />
          <Textarea name="bio" label="Bio" />
        </fieldset>

        <fieldset>
          <legend>About your classes</legend>

          <Select
            name="subject"
            label="Subject"
            options={[
              { value: "Artes", label: "Arts" },
              { value: "Biologia", label: "Biology" },
              { value: "Barista", label: "Barista" },
              { value: "Javascript", label: "Javascript" },
              { value: "Music", label: "Music" },
            ]}
          />
          <Input name="cost" label="Hourly rate " />
        </fieldset>

        <fieldset>
          <legend>
            Available classes
            <button type="button" onClick={addNewScheduleItem}>
              + New availability
            </button>
          </legend>

          {scheduleItems.map((scheduleItem) => {
            return (
              <div key={scheduleItem.week_day} className="schedule-item">
                <Select
                  name="week_day"
                  label="Day"
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
                <Input name="from" label="From" type="time" />
                <Input name="to" label="To" type="time" />
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
          <button type="button">Submit form</button>
        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
