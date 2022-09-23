import React, {createRef, useEffect, useState} from "react";
import styled from "styled-components";
import a1 from "./../../assets/image/a1.png"
import a2 from "./../../assets/image/a2.png"
import a3 from "./../../assets/image/a3.png"
import a4 from "./../../assets/image/a4.png"
import a5 from "./../../assets/image/a5.png"
import a6 from "./../../assets/image/a6.png"
import a7 from "./../../assets/image/a7.png"
import a8 from "./../../assets/image/a8.png"
import a9 from "./../../assets/image/a9.png"
import a10 from "./../../assets/image/a10.png"
import a11 from "./../../assets/image/a11.png"
import a12 from "./../../assets/image/a12.png"
import a13 from "./../../assets/image/a13.png"
import a14 from "./../../assets/image/a14.png"
import a15 from "./../../assets/image/a15.png"
import bigJar from "./../../assets/image/jar/bigJar.webp"
import smallJar from "./../../assets/image/jar/smallJar.png"
import litleJar from "./../../assets/image/jar/litleJar.png"

const Page = styled.div`
  display: flex;
  flex-direction: row;
 padding: 0 50px;
  @media (max-width: 768px) { 
    flex-direction: column;
    padding: 0;
    align-items: center;
  }
`
const PerfumeBlock = styled.div`
  display: flex;
  flex-direction: column;
`
const BuyerBlock = styled.div`
  display: flex;
  flex-direction: column;
`
const PerfumeList = styled.li`
  width: 650px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  @media (max-width: 768px) {
    width: 370px;
    justify-content: space-evenly;
  }
`
const Perfume = styled.ul`
 
  img{
    width: 80px;
    border-radius: 20px;
    border: 5px solid black;
    &:hover{
      box-shadow: 0 0 5px 0 white;
     
    }
  }
  @media (max-width: 768px) {
    padding-left: 5px;
    margin: 5px 0;
    img{
      width: 55px;
      border: 2px solid black;
    }
  }
`
const PerfumeDetails = styled.div`
  margin-left: 40px;
  margin-right: 10px;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin: 0;
    padding: 10px;
  }
`
const DeteilsTitle = styled.label`
  display: flex;
  margin-bottom: 20px;
  font-size: 24px;
`
const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 3px;
  margin-bottom: 10px;

  border: 1px solid black;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.74);
  box-shadow: 0 0 5px 0 white;

  &:hover {
    box-shadow: 0 0 3px 0 white;
  }
`
const ItemImg = styled.img`
  width: 65px;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 white;
  @media (max-width: 768px) {
    width: 50px;
  }
`
const ItemInform = styled.div`
  display: flex;
  flex-direction: column;
`
const ItemTitle = styled.label`
  font-size: 19px;
  font-weight: 600;
  text-align: center;
  margin-top: 3px;
  margin-bottom: 5px;
`
const ItemCount = styled.div`
  display: flex;
  flex-direction: row;
`
const CountElement = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 10px;
  margin: 0 5px;

  font-size: 14px;
  border-radius: 5px;
  background-color: rgba(96, 92, 92, 0.23);
  @media (max-width: 768px) {
    padding: 2px 5px;
    margin: 0 5px;
  }
`
const CountB = styled.b`
  font-size: 24px;
  margin-left: 5px;
`
const ItemBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 5px;
  margin-top: 5px;
`
const EditSvg = styled.div`
  &:hover {
    path {
      fill: #28A745;
    }
  }
`
const RemoveBtn = styled.div`
  &:hover {
    path {
      fill: red;
    }
  }
`
const PopUpBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.52);
`
const PopUpContainer = styled.div`
  width: 800px;
  height: 400px;

  display: flex;
  flex-direction: row;

  margin: 11% auto 0 auto;
  background-color: #bebbbb;
  border-radius: 30px;
  box-shadow: 0 0 5px 5px #fcfcfc;
  @media (max-width: 768px) {
    width: 90%;
    height: auto;
    flex-direction: column;
  }
`
const PopUpImg = styled.img`
  height: 100%;
  border-radius: 30px;
  @media (max-width: 768px) {
   width: 150px;
    margin-top: 10px;
    align-self: center;
  }
`
const PopUpRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const PopUpTitle = styled.label`
  display: block;
  margin: 20px auto 50px auto;
  padding: 10px 50px;

  color: #fcfcfc;
  background-color: black;
  font-size: 28px;
  font-weight: 600;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 white;
`
const PopUpCountBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Count = styled.div`
  display: flex;
  flex-direction: row;
  
  margin-bottom: 15px;
`
const PopUpCountLabel = styled.label`
  width: 80px;
  margin-right: 20px;
  text-align: right;
  font-size: 24px;
  font-weight: 600;
  color: black;
`
const BigJarImg = styled.img`
  width: 25px;
  transform: rotate(-20deg);
  margin-right: 5px;
  @media (max-width: 768px) {
    width: 20px;
  }
`
const LitleJarImg = styled.img`
  width: 40px;
  transform: rotate(-20deg);
  @media (max-width: 768px) {
    width: 30px;
  }
`
const PopUpCountInput = styled.input`
  width: 40px;
  padding: 5px;
  -webkit-appearance: none;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  border: 2px solid black;
  color: #103809;
  background-color: rgb(255, 255, 255);
`
const MathBtn = styled.button`
  width: 30px;
  font-size: 24px;
  font-weight: bold;
  color: black;
  background-color: white;
  &:hover{
    box-shadow: 0 0 5px 0 black;
  }
`
const MinusBtn = styled(MathBtn)`
  border-radius: 10px 0 0 10px;
`
const PlusBtn = styled(MathBtn)`
  border-radius: 0 10px 10px 0;
`
const PopUpBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  margin-top: 20px;
  
`
const PopUpBtn = styled.button`
  width: 130px;
  height: 40px;
  margin:  10px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  color: #FFFFFF;
`
const AcceptBtn = styled(PopUpBtn)`
  color: white;
  background-color: black;
  border: 2px solid white;
  box-shadow: 0 0 10px 0 #093303;
  &:hover {
    box-shadow: 0 0 5px 0 #12234f;
  }
`
const CancelBtn = styled(PopUpBtn)`
  color: white;
  background-color: black;
  border: 2px solid white;
  box-shadow: 0 0 10px 0 #a40707;

  &:hover {
    box-shadow: 0 0 5px 0 #4f1212;
  }
`

const NaomiStorage = (props) => {
    const [rerender, setRerender] = useState(false);
    const [countPopup,setCountPopup] = useState(false)
    const [editCountPopup,setEditCountPopup] = useState(false)
    const [selectedPerfume,setSelectedPerfume] = useState({})

    const listPerfume = [
        {
            id:1545,
            name:"Апельсин",
            img:a1
        },
        {
            id:2545,
            name:"Банан",
            img:a2
        },
        {
            id:3545,
            name:"Ваніль",
            img:a3
        },
        {
            id:4545,
            name:"Виноград",
            img:a4
        },
        {
            id:5545,
            name:"Вишня",
            img:a5
        },
        {
            id:6545,
            name:"Жуйка",
            img:a6
        },
        {
            id:7545,
            name:"Кавун",
            img:a7
        },
        {
            id:8545,
            name:"Карамель",
            img:a8
        },
        {
            id:9545,
            name:"Кокос",
            img:a9
        },
        {
            id:10545,
            name:"Малина",
            img:a10
        },
        {
            id:11545,
            name:"М'ята",
            img:a11
        },
        {
            id:12545,
            name:"Папая",
            img:a12
        },
        {
            id:13545,
            name:"Персик",
            img:a13
        },
        {
            id:14545,
            name:"Полуниця",
            img:a14
        },
        {
            id:15545,
            name:"Шоколад",
            img:a15
        },
    ]
    const [perfumeOnOrder, setPerfumeOnOrder] = useState([])

    const onCountPopup = (perfume) => {
        setSelectedPerfume(
            {
                name:perfume.name,
                img:perfume.img
            }
        )
        setCountPopup(true)
    }
    const offCountPopup = () => {
        setCountPopup(false)
    }
    const CountPopup = () => {
        const [fiftyMl,setFiftyMl] = useState(0)
        const [tenMl,setTenMl] = useState(0)
        const [fourMl,setFourMl] = useState(0)

        const addItemToOrder = () => {
           if(fiftyMl === 0 && tenMl === 0 && fourMl === 0 ){
               alert("Не вибрано жодного аромату :(")
           }else {
               perfumeOnOrder.push({
                   id:Math.floor(Math.random() * (9999999 - 1) + 1),
                   name:selectedPerfume.name,
                   img:selectedPerfume.img,
                   fiftyMl:fiftyMl,
                   tenMl:tenMl,
                   fourML:fourMl
               })
               offCountPopup()
           }
        }

        if (countPopup === true){
            return(
                <PopUpBody>
                    <PopUpContainer>
                        <PopUpImg src={selectedPerfume.img}/>
                        <PopUpRight>
                            <PopUpTitle>{selectedPerfume.name}</PopUpTitle>
                            <PopUpCountBlock>
                                <Count>
                                    <PopUpCountLabel>50 ML</PopUpCountLabel>
                                    <MinusBtn onClick={()=>{if (fiftyMl-1 >= 0){setFiftyMl(fiftyMl-1)}}}>-</MinusBtn>
                                    <PopUpCountInput type="text"
                                                     disabled
                                                     value={fiftyMl}
                                    />
                                    <PlusBtn onClick={()=>{setFiftyMl(fiftyMl+1)}}>+</PlusBtn>
                                </Count>
                                <Count>
                                    <PopUpCountLabel>10 ML</PopUpCountLabel>
                                    <MinusBtn onClick={()=>{if (tenMl-1 >= 0){setTenMl(tenMl-1)}}}>-</MinusBtn>
                                    <PopUpCountInput type="text"
                                                     disabled
                                                     value={tenMl}
                                    />
                                    <PlusBtn onClick={()=>{setTenMl(tenMl+1)}}>+</PlusBtn>
                                </Count>
                                <Count>
                                    <PopUpCountLabel>2 ML</PopUpCountLabel>
                                    <MinusBtn onClick={()=>{if (fourMl-1 >= 0){setFourMl(fourMl-1)}}}>-</MinusBtn>
                                    <PopUpCountInput type="text"
                                                     disabled
                                                     value={fourMl}
                                    />
                                    <PlusBtn onClick={()=>{setFourMl(fourMl+1)}}>+</PlusBtn>
                                </Count>
                            </PopUpCountBlock>
                            <PopUpBtns>
                                <AcceptBtn onClick={addItemToOrder}>Добавити</AcceptBtn>
                                <CancelBtn onClick={offCountPopup}>Відмінити</CancelBtn>
                            </PopUpBtns>
                        </PopUpRight>
                    </PopUpContainer>
                </PopUpBody>
            )
        }
    }

    const onEditCountPopup = (perfume) => {
        setSelectedPerfume(
            {
                id:perfume.id,
                name:perfume.name,
                img:perfume.img,
                fiftyMl:perfume.fiftyMl,
                tenMl:perfume.tenMl,
                twoMl:perfume.fourML
            }
        )
        setEditCountPopup(true)
    }
    const EditCountPopup = () => {
        const [fiftyMl,setFiftyMl] = useState(selectedPerfume.fiftyMl)
        const [tenMl,setTenMl] = useState(selectedPerfume.tenMl)
        const [fourMl,setFourMl] = useState(selectedPerfume.twoMl)
        const editItem = () => {
            if(fiftyMl === 0 && tenMl === 0 && fourMl === 0 ){
                alert("Не вибрано жодного аромату :(")
            }else {
                const indexElement = perfumeOnOrder.findIndex( elem => elem.id === selectedPerfume.id)
                perfumeOnOrder.splice(indexElement,1,{
                    id:Math.floor(Math.random() * (9999999 - 1) + 1),
                    name:selectedPerfume.name,
                    img:selectedPerfume.img,
                    fiftyMl:fiftyMl,
                    tenMl:tenMl,
                    fourML:fourMl
                })
                setEditCountPopup(false)
            }
        }

        if (editCountPopup === true){
            return(
                <PopUpBody>
                    <PopUpContainer>
                        <PopUpImg src={selectedPerfume.img}/>
                        <PopUpRight>
                            <PopUpTitle>{selectedPerfume.name}</PopUpTitle>
                            <PopUpCountBlock>
                                <Count>
                                    <PopUpCountLabel>50 ML</PopUpCountLabel>
                                    <MinusBtn onClick={()=>{if (fiftyMl-1 >= 0){setFiftyMl(fiftyMl-1)}}}>-</MinusBtn>
                                    <PopUpCountInput type="text"
                                                     disabled
                                                     value={fiftyMl}
                                    />
                                    <PlusBtn onClick={()=>{setFiftyMl(fiftyMl+1)}}>+</PlusBtn>
                                </Count>
                                <Count>
                                    <PopUpCountLabel>10 ML</PopUpCountLabel>
                                    <MinusBtn onClick={()=>{if (tenMl-1 >= 0){setTenMl(tenMl-1)}}}>-</MinusBtn>
                                    <PopUpCountInput type="text"
                                                     disabled
                                                     value={tenMl}
                                    />
                                    <PlusBtn onClick={()=>{setTenMl(tenMl+1)}}>+</PlusBtn>
                                </Count>
                                <Count>
                                    <PopUpCountLabel>2 ML</PopUpCountLabel>
                                    <MinusBtn onClick={()=>{if (fourMl-1 >= 0){setFourMl(fourMl-1)}}}>-</MinusBtn>
                                    <PopUpCountInput type="text"
                                                     disabled
                                                     value={fourMl}
                                    />
                                    <PlusBtn onClick={()=>{setFourMl(fourMl+1)}}>+</PlusBtn>
                                </Count>
                            </PopUpCountBlock>
                            <PopUpBtns>
                                <AcceptBtn onClick={editItem}>Добавити</AcceptBtn>
                                <CancelBtn onClick={()=>{setEditCountPopup(false)}}>Відмінити</CancelBtn>
                            </PopUpBtns>
                        </PopUpRight>
                    </PopUpContainer>
                </PopUpBody>
            )
        }
    }

    const deleteItemFromOrder = (id) => {
        const indexElement = perfumeOnOrder.findIndex( elem => elem.id === id)
        perfumeOnOrder.splice(indexElement,1)
        setRerender(!rerender);

    }


    return(
        <Page>
            <PerfumeBlock>
                <PerfumeList>
                    {listPerfume.map(p => {
                        return (
                            <Perfume key={Math.random()} onClick={() => {
                                onCountPopup(p)
                            }}>
                                <img src={p.img} alt="Парфум"/>
                            </Perfume>
                        )
                    })}
                </PerfumeList>
                <PerfumeDetails>
                    <DeteilsTitle>Деталі замовлення:</DeteilsTitle>
                    {perfumeOnOrder.map(e => {
                        return(
                            <Item key={Math.random()}>
                                <ItemImg src={e.img}/>
                                <ItemInform>
                                    <ItemTitle>{e.name}</ItemTitle>
                                    <ItemCount>
                                        <CountElement>
                                            <BigJarImg src={bigJar}/>
                                            <CountB>{e.fiftyMl}</CountB>
                                        </CountElement>
                                        <CountElement>
                                            <LitleJarImg src={smallJar}/>
                                            <CountB>{e.tenMl}</CountB>
                                        </CountElement>
                                        <CountElement>
                                            <LitleJarImg src={litleJar}/>
                                            <CountB>{e.fourML}</CountB>
                                        </CountElement>
                                    </ItemCount>
                                </ItemInform>
                                <ItemBtn>
                                    <EditSvg onClick={()=>{onEditCountPopup(e)}}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.2586 0.16333L4.32891 8.09302L0.826958 19.1731L11.909 15.6711L19.8367 7.74146L18.4227 6.32739L11.866 12.886C11.7359 12.7046 11.5952 12.5273 11.4285 12.3606C10.6406 11.5727 9.7115 11.2628 8.89727 11.0735C8.71961 10.2685 8.42108 9.35225 7.64141 8.57153H7.63945C7.47339 8.40547 7.29653 8.26358 7.11602 8.13403L13.6727 1.57739L12.2586 0.16333ZM5.90313 9.74536C6.0157 9.82268 6.13522 9.89542 6.2254 9.9856C6.71659 10.4774 6.9906 11.3631 7.08477 12.0266L7.18829 12.7571L7.9168 12.8743C8.59929 12.9844 9.52312 13.2833 10.0145 13.7747C10.1055 13.8657 10.1823 13.9816 10.2606 14.095L5.38555 15.634L4.36602 14.6145L5.90313 9.74536Z" fill="grey"/>
                                        </svg>
                                    </EditSvg>
                                    <RemoveBtn onClick={()=>{deleteItemFromOrder(e.id)}}>
                                        <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.4996 0.000152588C5.59489 0.000152588 0 5.59525 0 12.4993C0 19.4051 5.59489 25.0002 12.4996 25.0002C19.4033 25.0002 25 19.4042 25 12.4993C25 5.59525 19.4033 0.000152588 12.4996 0.000152588ZM12.4996 23.7225C6.30118 23.7225 1.27758 18.6961 1.27758 12.4993C1.27758 6.30156 6.30118 1.27867 12.4996 1.27867C18.6961 1.27867 23.7215 6.30156 23.7215 12.4993C23.7215 18.6952 18.6961 23.7225 12.4996 23.7225Z" fill="grey" fillOpacity="0"/>
                                            <path d="M17.874 9.11699L15.8821 7.1259C15.8821 7.1259 12.7065 10.5082 12.5 10.5082C12.2925 10.5082 9.11602 7.1259 9.11602 7.1259L7.125 9.11789C7.125 9.11789 10.5071 12.223 10.5071 12.5037C10.5071 12.7818 7.125 15.8869 7.125 15.8869L9.11602 17.8753C9.11602 17.8753 12.2666 14.4939 12.5 14.4939C12.7333 14.4939 15.8821 17.8753 15.8821 17.8753L17.8749 15.8869C17.8749 15.8869 14.491 12.7299 14.491 12.5037C14.4901 12.2704 17.874 9.11699 17.874 9.11699Z" fill="grey" fillOpacity="1"/>
                                        </svg>
                                    </RemoveBtn>
                                </ItemBtn>
                            </Item>
                        )
                    })}
                </PerfumeDetails>
            </PerfumeBlock>
            <BuyerBlock>

            </BuyerBlock>


            <CountPopup/>
            <EditCountPopup/>
        </Page>
    )
}

export default NaomiStorage;