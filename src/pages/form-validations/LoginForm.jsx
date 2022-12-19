import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Select, InputLog } from "../../Components/component";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../utils/validators";

import { useForm } from "../../hooks/form-hooks";

const LoginForm = () => {
  const roleOptions = [
    { value: "Please Select a Role" },
    { value: "Admin" },
    { value: "doctor" },
    { value: "patient" },
  ];

  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  const [formState, inputHandler, setFormData] = useForm(
    {
      emailAddress: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
      role: {
        value: "",
        isValid: false,
      },
      element: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const loggedHandler = () => {
    if (!isLogged) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.emailAddress.isValid &&
          formState.inputs.password.isValid
      );
      //   navigate("/userrole/:roleid/dashboard/doctor/");
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
      // navigate("/userrole/:roleid/dashboard/doctor/");
    }
    setIsLogged((prevLogg) => !prevLogg);
  };

  useEffect(() => {
    if (formState.inputs.role.value === "patient") {
      navigate("/userrole/:roleid/dashboard/patient/mydata/");
    } else if (formState.inputs.role.value === "doctor") {
      navigate("/userrole/:roleid/dashboard/doctor/");
    } else if (formState.inputs.role.value === "Admin") {
      navigate("/userrole/:roleid/dashboard/admin/");
    }
  }, [formState]);

  return (
    <>
      <form className="login__Form-Box">
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="login__Form-Input">
          <div>
            <Select
              element="select"
              id="role"
              label="Select Role"
              options={roleOptions}
              validators={[VALIDATOR_REQUIRE()]}
              errorText="Please Select Role"
              onInput={inputHandler}
            />
          </div>
          <div>
            <InputLog
              element="input"
              id="emailAddress"
              type="email"
              label="Email Address"
              placeholder="Enter Email Address"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please Enter Valid Email Address"
              onInput={inputHandler}
            />
          </div>
          {formState.inputs.role.value === "doctor" ? (
            <div>
              <button
                type="button"
                className="group login__Button--Container-Btn"
              >
                <span className="login__Button--Container-BtnSpan"></span>
                Generate OTP
              </button>
            </div>
          ) : formState.inputs.role.value === "patient" ? (
            <div>
              <button
                //onClick={patientOtpHandler}
                type="button"
                className="group login__Button--Container-Btn"
              >
                <span className="login__Button--Container-BtnSpan"></span>
                Generate OTP
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="login__Checkbox-Container">
          <div className="login__Checkbox-Container--Box">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="login__Checkbox-Container--InputBox"
            />
            <label
              htmlFor="remember-me"
              className="login__Checkbox-Container--Label"
            >
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button type="submit" className="group login__Button--Container-Btn">
            <span className="login__Button--Container-BtnSpan"></span>
            Sign in
          </button>
        </div>
        <div className="login__Divider--Box">
          <p className="login__Divider--Text">Or</p>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
