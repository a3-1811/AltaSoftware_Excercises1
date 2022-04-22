  import React, { useEffect, useRef, useState } from "react";
  import { Gender, Robo, RoboCreate, RoboUpdate } from "../../state/actions";
  import { useNavigate, useParams } from "react-router-dom";
  import "./style.scss";
  import roboDefault from "../../assets/roboDefault.png";
  import { useDispatch } from "react-redux";
  import { bindActionCreators } from "redux";
  import { actionCreators, State } from "../../state";
import { useSelector } from "react-redux";
  
  interface ObjError {
    name: string;
    dame: string;
    hp: string;
  }
  
  function Update() {
    const { id } = useParams()
    const dispatch = useDispatch();
    const robos = useSelector((state : State) => state.robos)
    const { updateRobo } = bindActionCreators(actionCreators, dispatch);
    const errorRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [robo, setrobo] = useState<RoboCreate>({
      name: "",
      dame: 0,
      gender: Gender.FEMALE,
      hp: 0,
      image: "",
    });
    const [error, setError] = useState({
      name: "",
      dame: "",
      hp: "",
    });
    const history = useNavigate();
  
    const handleRadomImage = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      const baseImageUrl = "https://robohash.org/";
      let imgSrc= baseImageUrl + Date.now() + ".png"
      setrobo({...robo, image : imgSrc});
    };
    useEffect(() => {
      let index : number = robos.findIndex(item=> item.id === id)
      if(index === -1){
        history('/')
      }else{
        let temp : Robo = robos[index]
        setrobo({...temp})
      }
    }, []);
  
    const handleOnChange = (e: React.FormEvent<HTMLInputElement>): void => {
      e.preventDefault();
      const target = e.target as HTMLInputElement;
      setrobo({ ...robo, [target.name]: target.value });
      if (errorRef.current) {
        clearInterval(errorRef.current);
      }
      errorRef.current = setTimeout(() => {
        // Check error
        if (target.value.toString().length <= 0) {
          setError({ ...error, [target.name]: "This is require field!" });
        } else {
          try {
            if (target.name === "hp" || target.name === "dame") {
              let number = parseInt(target.value);
              if (number < 10) {
                setError({
                  ...error,
                  [target.name]: "Number must be lager than 10!",
                });
              } else {
                setError({ ...error, [target.name]: "" });
                setrobo({ ...robo, [target.name]: parseInt(target.value) });
              }
            } else {
              setError({ ...error, [target.name]: "" });
            }
          } catch (error) {}
        }
      }, 500);
    };
  
    const handleOnErrorImage = (e: any): void => {
      e.target.onerror = null;
      setrobo({...robo,image : roboDefault});
    };
  
    const handleOnChangeSelect = (
      e: React.FormEvent<HTMLSelectElement>
    ): void => {
      e.preventDefault();
      const target = e.target as HTMLSelectElement;
      setrobo({ ...robo, [target.name]: target.value });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault();
      if (robo.name === "") {
        setError({ ...error, name: "This is require field!" });
        return
      }
      if (
        Object.keys(error).every(
          (key: string) => error[key as keyof ObjError] === ""
        )
      ) {
        let newRobo: RoboUpdate = {
          id : id as string,
          ...robo,
        };
          updateRobo(newRobo);
          history("/");
      }
    };
    return (
      <div className="update">
        <form onSubmit={handleSubmit}>
          <h2>Update new robo</h2>
          <div className="inputControl">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleOnChange}
              value={robo.name as string}
            />
            <p className="error">{error?.name}</p>
          </div>
          <div className="inputControl">
            <label>Hp</label>
            <input
              type="number"
              name="hp"
              onChange={handleOnChange}
              value={robo.hp as number}
            />
            <p className="error">{error?.hp}</p>
          </div>
          <div className="inputControl">
            <label>Dame</label>
            <input
              type="number"
              name="dame"
              onChange={handleOnChange}
              value={robo.dame as number}
            />
            <p className="error">{error?.dame}</p>
          </div>
          <div className="inputControl">
            <label>Image</label>
            <div className="content">
              <button onClick={handleRadomImage}>Random image</button>
              <div className="imgBox">
                <img src={robo?.image as string} onError={handleOnErrorImage} />
              </div>
            </div>
          </div>
          <div className="inputControl">
            <label>Gender</label>
            <select
              value={robo.gender}
              onChange={handleOnChangeSelect}
              name="gender"
            >
              <option value={Gender.FEMALE}>Female</option>
              <option value={Gender.MALE}>Male</option>
            </select>
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    );
  }
  
  export default Update;
  