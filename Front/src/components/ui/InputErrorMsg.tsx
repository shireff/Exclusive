interface Iprops {
  msg?: string;
}

const InputErrorMsg = ({ msg }: Iprops) => {
  return msg ? (
    <span className="block text-red-700 font-semibold mt-1 ml-1 text-sm">
      {msg}
    </span>
  ) : null;
};

export default InputErrorMsg;
