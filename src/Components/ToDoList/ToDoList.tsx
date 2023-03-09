import React, {useState} from 'react';
import ToDoListElement from "./ToDoListElement";

type ListElement = {
    name:string;
    desc:string;
}
const ToDoList = () => {

    const [Name, SetName] = useState('');

    const[Desc, SetDesc] = useState('');

    const [list, SetList] = useState<ListElement[]>([]);

    const AddElemInList = () => {
        SetList([...list, {
            name:Name,
            desc:Desc}])
        SetName('');
        SetDesc('');
    }


    const onDeleteClick = (index: number) => {
        const filtered = list.filter((el, i) => i !== index)

        SetList(filtered);
    }


    return (
        <div>
            <input
                type = "text"
                value = {Name}
                onChange={(e)=>SetName(e.target.value)}
            />

            <input
                type = "text"
                value = {Desc}
                onChange={(e)=>SetDesc(e.target.value)}
            />

            <div>
                <button onClick={()=>AddElemInList()}>
                    Добавить в список
                </button>

                <div>
                    
                    <div>
                        {
                            list.map((el, i) =>
                                <ToDoListElement
                                    onDeleteClick={()=> onDeleteClick(i)}
                                    name={el.name}
                                    desc={el.desc}
                                    key={i}
                                />)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;