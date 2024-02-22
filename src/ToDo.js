import React, { useEffect, useState } from 'react';
import classes from './ToDo.module.css';
import Typography from '@mui/material/Typography';
import { Button, IconButton, Input } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

const getlocaltimes = () => {
    let todo = localStorage.getItem('todo');

    if(todo){
        return JSON.parse(localStorage.getItem('todo'));
    }
    else{
        return [];
    }
}

const ToDo = () => {
    const[inputdata,setInputData] = useState('');
    const[items,setItems] = useState(getlocaltimes());
    const[toggle, setToggle] = useState(true);
    const[isedit,setEdit] = useState(null);

    const additem = () => {
        if(!inputdata){
            alert('fill data');
        }else if(inputdata && !toggle){
            setItems(
                items.map((curelem) => {
                    if(curelem.id===isedit){
                        return{...curelem,name:inputdata}
                    }
                    return curelem;
                })
            )
            setInputData('');
            setToggle(true);
        }
        else{
            const allInputData = {id: new Date().getTime().toString(), name:inputdata}
            setItems([...items,allInputData]);
            setInputData('');
        }
        // const allInputData = {id: new Date().getTime().toString(), name:inputdata}
        //      setItems([...items,allInputData]);
        //     setInputData('');
    }

    const deleteitem = (index) => {
        const updateditems = items.filter((curelem) => {
            return index !== curelem.id;
        });

        setItems(updateditems);
    }

    const edititem = (id) => {
        const newedititem = items.find((curelem) => {
            return curelem.id === id;
        })
        console.log(newedititem);
        setToggle(false);
        setInputData(newedititem.name);
        setEdit(id);
    }

    useEffect(() => {
        localStorage.setItem('todo',JSON.stringify(items))
    },[items]);

  return (
    <>
    <div className={classes.main}>
        <div className={classes.mainmain}>
        <Typography variant='h3' gutterBottom mt={2}>TO-DO-LIST</Typography>

        <div className={classes.additems}>
            <input type='text' placeholder='Add Items....' className={classes.input} value={inputdata} onChange={(e) => setInputData(e.target.value)}/>
            {toggle ? <IconButton color='success' >
                <AddCircleIcon fontSize='large' onClick={additem}/>
            </IconButton> : <IconButton><ModeEditOutlinedIcon color="secondary" onClick={additem}/></IconButton>}
        </div>

        <div className={classes.showitems}>
            {
                    items.map((curelem) => {
                    return(
                        <div className={classes.eachitem} key={curelem.id}>
                        <Typography variant='h5'>{curelem.name}</Typography>
                        <IconButton >
                            <ModeEditOutlinedIcon color="secondary" onClick={() => edititem(curelem.id)}/>
                            <DeleteForeverSharpIcon color='error' onClick={() => deleteitem(curelem.id)}/>
                        </IconButton>
            </div>
                    )
                })
            }
        </div>
        
        
        </div>
    </div>
    </>
  )
}

export default ToDo


//edit the item when user click on edit button

//1:get the id and name of data which user clicked to edit
//2:set toggle mode to change the submit button into edit button
//3:now update the value of {setinput} with new updated value to edit
//4:to pass the current element id to new state variable for reference