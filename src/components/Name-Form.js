const NameForm = (props)=> {
    const {forms, setForms} = props;
    const handleInputChange = (e, label) => {
        const value = e.target.value;
        const list = forms.map((key) => {
          if (key.label === label) {
            return {
              ...key,
              value: value,
              color: "[#CBD5E1]",
            };
          } else {
            return key;
          }
        });
        setForms(list);
      };
    
    return (
        <div className="w-full h-72">
        <form className="gap-2 flex flex-col">
          {forms.map((el) => (
            <div key={el.label} className="gap-2 flex flex-col">
              <label className="text-sm">{el.label}*</label>
              <input
                onChange={(e) => handleInputChange(e, el.label)}
                type={el.type}
                placeholder={el.placeHolder}
                value={el.value}
                className={`p-3 border border-${el.color} rounded-lg enabled:hover:border-[#0CA5E9]`}
              />
              {el.color == "red-400" && (
                <label className="text-red-400 text-sm">
                  {el.errorText}
                </label>
              )}
            </div>
          ))}
        </form>
      </div>
    )
}
export default NameForm