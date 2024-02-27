import React, { useState } from "react";
import { Switch, Radio, Checkbox, Button } from "antd";
import "./App.css";

interface DataObject {
  switch: boolean;
  radio: string;
  checkboxes: string[];
}

const App: React.FC = () => {
  const [data, setData] = useState<DataObject>({
    switch: true,
    radio: "No",
    checkboxes: ["0"],
  });

  const handleSwitchChange = (checked: boolean) => {
    setData((prevData) => ({ ...prevData, switch: checked }));
  };

  const handleRadioChange = (checkedValue: string) => {
    setData((prevData) => ({ ...prevData, radio: checkedValue }));
  };

  const handleCheckboxChange = (checkedValues: string[]) => {
    setData((prevData) => ({ ...prevData, checkboxes: checkedValues }));
  };

  const handleProcessButtonClick = () => {
    console.log("Current state of data object:", data);
  };

  return (
    <div className="p-4 flex flex-col justify-center">
      <div className="flex items-center justify-between mb-4">
        <div>Editable</div>
        <Switch checked={data.switch} onChange={handleSwitchChange} />
      </div>
      <div className={`mb-4`}>
        <div className={`text-lg font-bold`}>
          Are you proficient in ReactJS development?
        </div>
        <Radio.Group
          value={data.radio}
          onChange={(e)=>handleRadioChange(e.target.value)}
          className="flex flex-col"
          disabled={!data.switch}
        >
          <Radio value="No" disabled={!data.switch}>
            No
          </Radio>
          <Radio value="Yes" disabled={!data.switch}>
            Yes
          </Radio>
        </Radio.Group>
      </div>
      <div className={`mb-4`}>
        <div className={`text-lg font-bold`}>Which tools do you use?</div>
        <div className={`text-gray-500`}>Please select all that apply.</div>
        <Checkbox.Group
          options={[
            { label: "Redux", value: "0" },
            { label: "Lodash", value: "1" },
            { label: "Ant Design", value: "2" },
            { label: "Webpack", value: "3" },
            { label: "Other", value: "4" },
          ]}
          value={data.checkboxes}
          onChange={handleCheckboxChange}
          className="flex flex-col"
          disabled={!data.switch}
        />
      </div>

      <div className="flex justify-center">
        <Button
          type="primary"
          onClick={handleProcessButtonClick}
          className={'rounded-full px-6 py-4'}
          disabled={!data.switch}
        >
          Process
        </Button>
      </div>
    </div>
  );
};

export default App;
