import React from "react";
import { Label } from "../ui/label";
// import { get } from 'mongoose';
import { Input } from "../ui/input";

const types = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

function CommonForm({ formControls }) {
  function renderInputsByComponentType(getControlItem) {
    let element = null;
    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
          />
        );

        break;
      case "select":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
          />
        );

        break;
      case "textarea":
        element = (
          <Input
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
          />
        );

        break;

      default:
        break;
    }
    return element;
  }

  return (
    <form>
      <div className="flex flex-col gap-3">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-1.5" key={controlItem.name}>
            <Label className="mb-1">{controlItem.Label}</Label>
            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>
    </form>
  );
}

export default CommonForm;
