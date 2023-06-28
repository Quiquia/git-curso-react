import styled from "styled-components";
import InputTextStyled from "./input-text";
import Selector from "./selector";
import Separator from "./separator";

const FilterStyle = styled.div`
  grid-area: filters;
  .count {
    font: var(--headline2-semi-bold);
    color: var(--white);
    margin-block-end: 1.5rem;
  }

  .action-list {
    display: flex;
    gap: 1rem;
  }

  .select-list {
    display: flex;
    gap: 0.5rem;
  }

  @media screen and (max-width: 414px) {
    .count {
      display: none;
    }

    .action-list {
      display: flex;
      flex-direction: column;
      padding-block-end: 1.5rem;
    }
  }
`;

function Filters({ repoListCount, setSearch, setFilters, Filters }) {
  function handleChange(event) {
    setSearch(event.target.value);
  }

  function handleChangeSelect(event) {
    setFilters({ ...Filters, [event.target.name]: event.target.value });
    // console.log(event.target.name);
  }

  return (
    <FilterStyle>
      <h2 className="count">Repositorios ({repoListCount}) </h2>
      <div className="action-list">
        <InputTextStyled
          type="search"
          placeholder="Buscar un repositorio"
          onChange={handleChange}
        />

        <div className="select-list">
          <Selector
            name="branch"
            onChange={handleChangeSelect}
            placeholder="Texto"
          >
            <option value="" hidden>
              Type
            </option>
            <option value="all">All</option>
            <option value="forks">Forks</option>
            <option value="sources">Sources</option>
            <option value="archived">Archived</option>
          </Selector>
          <Selector
            onChange={handleChangeSelect}
            name="language"
            defaultValue=""
          >
            <option value="" hidden>
              Language
            </option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
          </Selector>
          <Selector name="order" onChange={handleChangeSelect}>
            <option value="" hidden>
              Ordenar
            </option>
            <option value="stars">Stars</option>
          </Selector>
        </div>
      </div>
      <Separator />
    </FilterStyle>
  );
}

export default Filters;
