import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, remove, modify, /*changePrice*/ } from "../../actions/actions";


import Btn from "@component/btn";

// CSS
import simulator from '@scss/simulator.module.scss';
// import button from '@scss/btn.module.scss';

const Task = (props) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(props.selected);
  // const [feedback, setFeedback] = useState('1');
  const feedback = '1';

  const toggleSelection = (e) => {
    setChecked(!checked);
    if (checked) {
      props.update(props.number - 1);
      dispatch(remove(props.id, parseInt(props.price)));
    } else {
      props.update(props.number + 1);
      dispatch(add(props.id, props.name, parseInt(props.price), props.category, feedback));
    }
    dispatch(modify(props.id, props.selected));
    return checked;
  }

  // const handleFeedback = (number, price) => {
  //   dispatch(changePrice(props.id, price));
  //   setFeedback(number);
  // }

  // const changeCat = (cat) => {
  //   props.updateCat(cat);
  // }

  return (
    <div
      id={'task-' + props.id}
      className={simulator.item + ` ${checked ? simulator.selected : ""} `}
    >
      <figure>
        <img src={props.image} alt={props.name} />
      </figure>
      <p className={simulator.name}><b>{props.name}</b></p>
      <span
        className={simulator.cat}
      // onClick={(e) => { changeCat(props.category); }}
      >
        {props.category}
      </span>
      <p className={simulator.price}>À partir de<span>{props.price}&nbsp;€</span></p>
      {/* <div className={`${simulator.feedbackBox}`}>
        <p>Nombre de retour(s)</p>
        <div>
          {props.feedback.map((option) => (
            <span
              key={option.number}
              className={`${simulator.feedback} ${option.value === props.price ? simulator.selected : ""}`}
              onClick={(e) => { handleFeedback(option.number, option.value); }}
            >
              {option.number}
            </span>
          ))
          }
        </div>
      </div> */}
      <span
        onClick={(e) => { toggleSelection(); }}
      >
        <Btn
          size="small"
          color={`${checked ? "red" : "blue"}`}
        >
          {checked ? "Supprimer" : "Ajouter"}
        </Btn>
      </span>
    </div >
  );

};

export default Task;

