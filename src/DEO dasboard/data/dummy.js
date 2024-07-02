import React from 'react';
import {  AiOutlineShoppingCart  } from 'react-icons/ai';
import { FiShoppingBag  } from 'react-icons/fi';

import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoSchoolSharp } from "react-icons/io5";
import { BiTransfer } from "react-icons/bi";

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);




export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'deodashboard',
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: 'Pages',
    links: [
      {
        name: 'schools',
        icon: <IoSchoolSharp />,
      },
      {
        name: 'teachers',
        icon: <LiaChalkboardTeacherSolid />,
      },
      {
        name: 'transfer-requests',
        icon: <BiTransfer />,
      },
    ],
  },
  
];



export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

