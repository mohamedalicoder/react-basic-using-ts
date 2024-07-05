import { ChangeEvent, useState } from "react";
import { Iform } from "../Interfaces"; // Add this line
import { formInputList } from "../data";
function Form(){

  
  const [formData, setFormData] = useState<Iform>({
    username: '',
    password: ''
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });   
    
  };

  const renderForm  = formInputList.map(input=>(
    <>
    <label>{input.label}</label><br/>
    <input value={formData[input.name]} onChange={onChange} type={input.type} id={input.id} name={input.name}/><br/>
    </>
  ));

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(formData);
      }} action="">

        {renderForm}
        <input type="submit"  value="Submit"/>
      </form>
    </>
  );
}

export default Form;