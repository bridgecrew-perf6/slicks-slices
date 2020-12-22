import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: grid;
  gap: 20px;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 800px) {
    --columns: 1;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
`;

// Single Grid Item (for Home Page)
export const ItemStyles = styled.div`
  text-align: center;
  position: relative;
  img {
    ${'' /* border: 1px solid red; */}
    height: auto;
    ${'' /* img can have ghost space.  Two inline elements next to each other you'll get spacing
    between the elements which is not margin, padding or boarder or anything it is ghost space and 
    font-size is here to handle that.  Although, it doesn't really have much effect in this case ;-)  */}
    font-size: 0;
  }
  p {
    top: 0;
    transform: rotate(-2deg) translateY(-10px);
    position: absolute;
    width: 100%;
    left: 0;
    margin: 0;
    ${'' /* fallback if browser ain't know what clamp be */}
    font-size: 2rem; 
    ${'' /* manage the fint size dependant on the screen size.  Yes? */}
    font-size: clamp(12px, 5vw, 20px);
  }
  .mark {
    display: inline;
  }
  ${'' /* animation for the shine effect */}
  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }
  ${'' /* for an image with a loading class */}
  img.loading {
    --shine: white;
    --background: var(--grey);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;
    animation: shine 1s infinite linear;
  }
`;
