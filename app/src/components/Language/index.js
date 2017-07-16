import { h, Component } from 'preact';

const Language = ({ programmingLanguage: language }) => (
  <div>
   {
     language ? language.language : null
   }
  </div>
);

export default Language;
