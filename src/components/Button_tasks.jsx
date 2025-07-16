function Button_tasks(props){
    return (
    <button className="bg-slate-400 text-white p-2 rounded-md cursor-pointer hover:scale-95 duration-100" {...props}>{props.children}</button>
    )
}

export default Button_tasks;