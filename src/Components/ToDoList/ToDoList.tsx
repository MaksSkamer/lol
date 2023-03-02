import React, {useState} from 'react';


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
                            list.map((el, i) => <div>
                            <div>
                                {el.name}
                            </div>
                            <div>
                                {el.desc}
                            </div>
                    </div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoList;