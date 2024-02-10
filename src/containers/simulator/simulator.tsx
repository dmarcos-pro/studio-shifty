import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Task from "./task";
import ActiveTask from "./activeTask";
import data from '../../content.json';

// import Btn from "@component/btn";

// CSS
import simulator from '@scss/simulator.module.scss';
import common from '@scss/common.module.scss';

const Simulator = () => {
  const [category, setCategory] = useState('Tout');
  const [categoryList, setCategoryList] = useState([]);

  const tasks = useSelector((store) => store.taskReducer.tasks);
  const activeTasks = useSelector((store) => store.activeTaskReducer.activeTasks);
  const price = useSelector((store) => store.activeTaskReducer.totalPrice);

  const [number, setNumber] = useState(activeTasks.length);

  useEffect(() => {

    const categories = [];
    tasks.map((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
      return categories;
    });
    setCategoryList(categories);
  }, [tasks]);

  const showFilter = (cat) => {
    setCategory(cat);
  }

  return (
    <aside className={simulator.layout}>
      <div>
        <div className={`${common.txtCenter}`}>
          <span className={`${common.tag} ${common.txt_salmon}`}>{data.simulator.tag}</span>
          <h2>{data.simulator.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: data.simulator.content }} />
        </div>
        {/* <div className={simulator.category}>
          <span>Filtrer par catégorie</span>
          <div>
            <span
              className={category === "Tout" ? simulator.selected : ""}
              onClick={(e) => { showFilter("Tout"); }}>
              Tout
            </span>
            {categoryList.map((item, index) => (
              <span
                key={index}
                onClick={(e) => { showFilter(item); }}
                className={item === category ? simulator.selected : ""}>
                {item}
              </span>
            ))}
          </div>
        </div> */}
        <div className={simulator.container}>
          <div className={simulator.items}>
            {category === "Tout"
              ?
              tasks.map((item, index) => (
                <Task
                  key={`task-` + index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  category={item.category}
                  selected={item.selected}
                  feedback={item.feedback}
                  number={number}
                  update={setNumber}
                  updateCat={setCategory}
                />
              ))
              :
              tasks.filter(item => item.category === category).map((item, index) => (
                <Task
                  key={`task-` + index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  category={item.category}
                  selected={item.selected}
                  feedback={item.feedback}
                  number={number}
                  update={setNumber}
                  updateCat={setCategory}
                />
              ))
            }
          </div>
          <div className={simulator.resume}>
            <aside>
              <div className={simulator.basket}>
                <p className={simulator.basket_title}>Votre panier ({number})</p>
                <div className={simulator.basket_items}>
                  {number === 0 ?
                    <p className={simulator.empty}>Votre panier est vide</p>
                    :
                    activeTasks.map((item, index) => {
                      return (
                        <ActiveTask
                          key={`activeTask-` + index}
                          price={item.price}
                          category={item.category}
                          name={item.name}
                          feedback={item.feedback}
                        />
                      )
                    })
                  }
                </div>
                <p className={simulator.basket_price}>
                  Total : {price}&nbsp;€
                </p>
              </div>
              <div className={simulator.basket_info}>

              </div>
            </aside>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Simulator;