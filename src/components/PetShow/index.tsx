import { createRef, CSSProperties, useCallback, useEffect } from "react";
import styled from "styled-components";

import "./levelup.css";
import egg from "src/images/pet/egg.png";
import genesisEgg from "src/images/pet/genesis-egg.png";
import PIXI from "src/utils/pixiLoader";
import "pixi-spine";
import { petStandApp } from "./animationConfig";
import { Spine } from "pixi-spine";
import { brindle, ear, eye, foot, ornament, tail } from "./const";

interface Props {
  pet: {
    element: undefined;
    parts: undefined;
    femaleInfoDetail: undefined;
    maleInfoDetail: undefined;
    propCounts: undefined;
  };
  style?: CSSProperties;
  cracking: boolean;
  height?: number;
  width?: number;
}
let petsStandRef: any = createRef<HTMLDivElement>();

export default function PetShow({
  pet,
  style,
  cracking,
  width,
  height,
}: Props) {
  const { id, genes, femaleId, maleId, parts, element } = pet;
  const standElement = (element || 0) + 1;
  const eyeKey = parts?.part_1[0].key;
  const tailKey = parts?.part_2[0].key;
  const ornamentKey = parts?.part_3[0].key;
  // const earKey = parts?.part_4[0].key;
  const earKey = parts?.part_4[0].key;
  const footKey = parts?.part_5[0].key;
  const brindleKey = parts?.part_6[0].key;

  const loaderCallback = useCallback(
    (
      loader: PIXI.Loader,
      res: Partial<Record<string, PIXI.LoaderResource>>
    ) => {
      if (
        typeof eyeKey === "number" &&
        typeof tailKey === "number" &&
        typeof ornamentKey === "number" &&
        typeof earKey === "number" &&
        typeof footKey === "number" &&
        typeof brindleKey === "number" &&
        genes &&
        petsStandRef.current &&
        res.tail &&
        res.body &&
        res.brindle1 &&
        res.ear1 &&
        res.foot &&
        res.head &&
        res.ornament &&
        res.brindle2 &&
        res.eye &&
        res.ear2 &&
        res.tail.spineData &&
        res.body.spineData &&
        res.brindle1.spineData &&
        res.ear1.spineData &&
        res.foot.spineData &&
        res.head.spineData &&
        res.brindle2.spineData &&
        res.eye.spineData &&
        res.ear2.spineData &&
        res.ornament.spineData
      ) {
        const width = petStandApp.screen.width / 2;
        const height = petStandApp.screen.height - 20;

        const tailAnimation = new Spine(res.tail.spineData);
        tailAnimation.x = width;
        tailAnimation.y = height;
        tailAnimation.zIndex = 1;
        tailAnimation.scale.set(0.5);
        tailAnimation.state.setAnimation(1, "stand", true);
        // tailAnimation.skeleton.setSkinByName(
        //   `${tail[tailKey]}_${standElement}`
        // );
        tailAnimation.skeleton.setSkinByName(
          `${tail[tailKey]}_${standElement}`
        );

        const bodyAnimation = new Spine(res.body?.spineData);
        bodyAnimation.x = width;
        bodyAnimation.y = height;
        bodyAnimation.zIndex = 2;
        bodyAnimation.scale.set(0.5);
        bodyAnimation.state.setAnimation(2, "stand", true);
        bodyAnimation.skeleton.setSkinByName(`body_${standElement}`);

        // const brindle1Animation = new PIXI.spine.Spine(res.brindle1?.spineData);
        const brindle1Animation = new Spine(res.brindle1.spineData);

        brindle1Animation.x = width;
        brindle1Animation.y = height;
        brindle1Animation.zIndex = 3;
        brindle1Animation.scale.set(0.5);
        brindle1Animation.state.setAnimation(3, "stand", true);
        brindle1Animation.skeleton.setSkinByName(`${brindle[brindleKey]}_0_1`);

        // const footAnimation = new PIXI.spine.Spine(res.foot?.spineData);
        const footAnimation = new Spine(res.foot.spineData);
        footAnimation.x = width;
        footAnimation.y = height;
        footAnimation.zIndex = 4;
        footAnimation.scale.set(0.5);
        footAnimation.state.setAnimation(4, "stand", true);
        footAnimation.skeleton.setSkinByName(`${foot[footKey]}_0`);

        // const ear1Animation = new PIXI.spine.Spine(res.ear1?.spineData);
        const ear1Animation = new Spine(res.ear1.spineData);
        ear1Animation.x = width;
        ear1Animation.y = height;
        ear1Animation.zIndex = 5;
        ear1Animation.scale.set(0.5);
        ear1Animation.state.setAnimation(5, "stand", true);
        ear1Animation.skeleton.setSkinByName(
          `${ear[earKey]}_${standElement}_1`
        );

        // const headAnimation = new PIXI.spine.Spine(res.head?.spineData);
        const headAnimation = new Spine(res.head.spineData);
        headAnimation.x = width;
        headAnimation.y = height;
        headAnimation.zIndex = 6;
        headAnimation.scale.set(0.5);
        headAnimation.state.setAnimation(6, "stand", true);
        headAnimation.skeleton.setSkinByName(`head_${standElement}`);

        // const ornamentAnimation = new PIXI.spine.Spine(res.ornament?.spineData);
        const ornamentAnimation = new Spine(res.ornament.spineData);
        ornamentAnimation.x = width;
        ornamentAnimation.y = height;
        ornamentAnimation.zIndex = 7;
        ornamentAnimation.scale.set(0.5);
        ornamentAnimation.state.setAnimation(7, "stand", true);
        ornamentAnimation.skeleton.setSkinByName(`${ornament[ornamentKey]}_0`);

        // const brindle2Animation = new PIXI.spine.Spine(res.brindle2?.spineData);
        const brindle2Animation = new Spine(res.brindle2.spineData);

        brindle2Animation.x = width;
        brindle2Animation.y = height;
        brindle2Animation.zIndex = 8;
        brindle2Animation.scale.set(0.5);
        brindle2Animation.state.setAnimation(8, "stand", true);
        brindle2Animation.skeleton.setSkinByName(`${brindle[brindleKey]}_0_2`);

        // const eyeAnimation = new PIXI.spine.Spine(res.eye?.spineData);
        const eyeAnimation = new Spine(res.eye.spineData);
        eyeAnimation.x = width;
        eyeAnimation.y = height;
        eyeAnimation.zIndex = 9;
        eyeAnimation.scale.set(0.5);
        eyeAnimation.state.setAnimation(9, "stand", true);
        eyeAnimation.skeleton.setSkinByName(`${eye[eyeKey]}_0`);

        // const ear2Animation = new PIXI.spine.Spine(res.ear2?.spineData);
        const ear2Animation = new Spine(res.ear2.spineData);
        ear2Animation.x = width;
        ear2Animation.y = height;
        ear2Animation.zIndex = 10;
        ear2Animation.scale.set(0.5);
        ear2Animation.state.setAnimation(10, "stand", true);
        ear2Animation.skeleton.setSkinByName(
          `${ear[earKey]}_${standElement}_2`
        );

        petStandApp.stage.addChild(bodyAnimation);
        petStandApp.stage.addChild(tailAnimation);
        petStandApp.stage.addChild(brindle1Animation);
        petStandApp.stage.addChild(footAnimation);
        petStandApp.stage.addChild(ear1Animation);
        petStandApp.stage.addChild(headAnimation);
        petStandApp.stage.addChild(ornamentAnimation);
        petStandApp.stage.addChild(brindle2Animation);
        petStandApp.stage.addChild(eyeAnimation);
        petStandApp.stage.addChild(ear2Animation);
      }
    },
    [
      brindleKey,
      earKey,
      eyeKey,
      footKey,
      genes,
      ornamentKey,
      standElement,
      tailKey,
    ]
  );

  useEffect(() => {
    if (petsStandRef) {
      petStandApp.loader.load(loaderCallback).onComplete.add(() => {
        if (petsStandRef.current?.innerHTML) {
          petsStandRef.current.innerHTML = "";
        }
        petsStandRef.current?.appendChild(petStandApp.view);
        petStandApp.start();
      });
    }
  }, [genes, loaderCallback]);

  useEffect(() => {
    return () => {
      petsStandRef = createRef<HTMLDivElement>();
      petStandApp.stage.removeChildren();
    };
  }, []);

  return (
    <StyledNFTShowContainer className="text-center" style={{ ...style }}>
      {genes ? (
        <>
          {/* <PetStand
            margin={"-16px auto 0"}
            style={{
              height: height ? height : 250,
              width: width ? width : 250,
            }}
            info={pet}
          ></PetStand> */}
        </>
      ) : (
        <StyledEgg
          cracking={cracking}
          src={
            typeof femaleId === "number" && typeof maleId === "number"
              ? egg
              : genesisEgg
          }
        />
      )}

      {/* 宠物动画，别删 */}
      {/* <div
        className="flex align-center"
        style={{
          height: genes ? 250 : 180,
          marginBottom: 30,
          marginTop: -30,
        }}
      >
        <div
          style={{
            height: genes ? "auto" : 0,
            width: genes ? "auto" : 0,
            zIndex: genes ? 1 : -1,
          }}
          ref={petsStandRef}
        ></div>
        {!genes && (
          <StyledEgg
            className="mt-20"
            cracking={cracking}
            src={
              typeof femaleId === "number" && typeof maleId === "number"
                ? egg
                : genesisEgg
            }
          />
        )}
      </div> */}
    </StyledNFTShowContainer>
  );
}

const StyledEgg = styled.img<{ cracking: boolean }>`
  margin-top: 20px;
  height: 160px;
  ${({ cracking }) => {
    return cracking ? "animation: eggRotate2 1.5s infinite linear;" : "";
  }}
  transform-origin: 50% 100%;
`;

const StyledNFTShowContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
`;
