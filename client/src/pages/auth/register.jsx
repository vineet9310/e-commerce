<<<<<<< HEAD
import CommonForm from "@/components/common/form";
// import { useToast } from "@/components/ui/use-toast";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
  console.log(data);
      if (data.payload) {
        navigate("/auth/login");
      }
    });
  }

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;
=======
import { Link } from "react-router-dom"
import { useState } from "react"
import CommonForm from "@/components/common/form"
import { registerFormControls } from "@/config"

const initilaState = {
  userName: '',
  email: '',
  password: ''
}

function AuthRegister() {

  const [formData, setFormData] = useState(initilaState)


  function onSubmit(){

  }

    return (
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Create new account</h1>
          <p>Already have an account
            <Link className="font-medium ml-2 text-primary hover:underline" to='/auth/login'>Login</Link>
          </p>
        </div>
        <CommonForm
        formControls={registerFormControls}
        buttonText={'Sign up'}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
        />
      </div>
    ) 
  }
  
  export default AuthRegister
>>>>>>> 03106f9cd9bb87793ab6e587301daa7ab9750bea
