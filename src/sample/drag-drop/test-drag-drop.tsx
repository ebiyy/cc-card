import React from 'react';
import './styles.scss';
import { dropIt, allowDrop, dragStart } from '../../script/drag-and-drop';

const DragAndDrop: React.FC = () => {
  return (
    <div className="board-layout">
      <div className="left">
        <div className="board-text">Today Board</div>
      </div>
      <div id="boardlists" className="board-lists">
        <div
          id="list1"
          className="board-list"
          onDrop={event => dropIt(event)}
          onDragOver={event => allowDrop(event)}
        >
          <div className="list-title">To Do</div>
          <div
            id="card1"
            className="card"
            draggable="true"
            onDragStart={event => dragStart(event)}
          >
            Work on article
          </div>
          <div
            id="card2"
            className="card"
            draggable="true"
            onDragStart={event => dragStart(event)}
          >
            Back up database
          </div>
          <div
            id="card3"
            className="card"
            draggable="true"
            onDragStart={event => dragStart(event)}
          >
            Build Lambda function
          </div>
          <div
            id="card4"
            className="card"
            draggable="true"
            onDragStart={event => dragStart(event)}
          >
            Work on course content
          </div>
          <div
            id="card5"
            className="card"
            draggable="true"
            onDragStart={event => dragStart(event)}
          >
            Debug SQL code
          </div>
        </div>
        <div
          id="list2"
          className="board-list"
          onDrop={event => dropIt(event)}
          onDragOver={event => allowDrop(event)}
        >
          <div className="list-title">In Progress</div>
        </div>
        <div
          id="list3"
          className="board-list"
          onDrop={event => dropIt(event)}
          onDragOver={event => allowDrop(event)}
        >
          <div className="list-title">Done</div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
