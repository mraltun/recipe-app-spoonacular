import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/searched/${searchTerm}`);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          type='text'
          value={searchTerm}
        />
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  margin: 0rem 2rem;

  div {
    position: relative;
    margin: 0 auto;
    width: min(50rem, 100%);
  }

  input {
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 3rem;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export default Search;
