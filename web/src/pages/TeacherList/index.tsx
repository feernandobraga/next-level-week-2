import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Select from "../../components/Select";
import TeacherItem from "../../components/TeacherItem";

import "./styles.css";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the proffys available.">
        <form id="search-teachers">
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

          <Input name="time" label="Time" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
