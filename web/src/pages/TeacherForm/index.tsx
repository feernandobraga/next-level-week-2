import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import Textarea from "../../components/Textarea";

function TeacherForm() {
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

          <Input name="subject" label="Subject" />
          <Input name="cost" label="Hourly rate " />
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
