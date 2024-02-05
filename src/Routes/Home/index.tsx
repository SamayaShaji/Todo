import Form from "../../Components/InfraStructure/Form";

import { validateRegister } from "../../Validation"

const Home = () => {
  return (
    <div className="form-container">
      <Form
        formStructure = {[
            {
                field: "password",
                label: "Namhhhe"
            },
            {
                field: "email",
                label: "Email"
            },
            {
                field: "phone",
                label: "Phone"
            }
        ]}
        emptyForm={{
          name:"",
          email:"",
          phone:""
        }}
        validateFunction={validateRegister}
        onSubmit={(d)=>console.log(d)}
      />
      <div><a href="http://localhost:5174/hello">go to hello</a></div>
    </div>
  )
  
}

export default Home