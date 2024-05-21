// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html


function myButtonClicked() {
  // define numbers
  const number = parseInt(document.getElementById("your-number").value)
  const sum = (number / 2) * (number + 1)
  // print answer
  document.getElementById("answer").innerHTML = "The answer is: " + sum
}