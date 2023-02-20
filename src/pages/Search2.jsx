import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Image1 from "../imgs/Imagen de WhatsApp 2023-02-17 a las 16.43.39.jpg";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Search2() {
  return (
    <div className="main">
      <div className="w-full text-center bg-white h-screen flex flex-col max-w-md mx-auto p-5">
        <Navbar>
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 m-10 pl-20 text-left  bg-slate-200"
                  aria-label="Search"
                  onClick={() => {
                    console.log("holi");
                  }}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <ul>
          <li key="img-carousel-1">
            <img className="m-16  pl-2   bg-white" src={Image1} alt="Info image 1" />
            <span>
              Nothing to found
            </span>
          </li>
          </ul>
      </div>
    </div>
  );
}

export default Search2;
