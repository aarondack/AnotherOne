import { h, Component } from 'preact';

const Language = ({ programmingLanguage }) => (
  <div className="language">
   {
    programmingLanguage ? programmingLanguage.language : null
   }
  </div>
);

export default Language;
