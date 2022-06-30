import { useState } from "react";

function ThreeRadioButton({
  valueOne,
  valueTwo,
  valueThree,
  textOne,
  textTwo,
  textThree,
  setSelectedValue,
  flexDirection,
  fourthButton,
  textFour,
  valueFour,
}) {
  return (
    <div className={`flex flex-${flexDirection} justify-center`}>
      <div className="form-check form-check-inline mr-10 mt-4">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id={`${textOne}1`}
          onChange={(e) => setSelectedValue(valueOne)}
        />
        <label
          className="form-check-label inline-block text-white"
          for={`${textOne}10`}
        >
          {textOne}
        </label>
      </div>
      <div className="form-check form-check-inline mr-10 mt-4">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id={`${textOne}2`}
          onChange={(e) => setSelectedValue(valueTwo)}
        />
        <label
          className="form-check-label inline-block text-white"
          for={`${textOne}20`}
        >
          {textTwo}
        </label>
      </div>
      <div className="form-check form-check-inline mt-4 mr-10">
        <input
          className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="inlineRadioOptions"
          id={`${textOne}3`}
          onChange={(e) => setSelectedValue(valueThree)}
        />
        <label
          className="form-check-label inline-block text-white"
          for={`${textOne}30`}
        >
          {textThree}
        </label>
      </div>
      {fourthButton ? (
        <div className="form-check form-check-inline mt-4">
          <input
            className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="inlineRadioOptions"
            id={`${textOne}4`}
            onChange={(e) => setSelectedValue(valueFour)}
          />
          <label
            className="form-check-label inline-block text-white"
            for={`${textOne}40`}
          >
            {textFour}
          </label>
        </div>
      ) : null}
    </div>
  );
}

export default ThreeRadioButton;
