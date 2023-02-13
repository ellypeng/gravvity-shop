import create from 'zustand'

const useStore = create(() => {
  return {
    startWorld: false,
    playerPosition: [0, 0, 0],
    playerInitialPosition: [-7, 1.7, 17],
    playerStatus: true,
    goto: '',
    playerRotation: Math.PI / 2,
    playerCameraRotation: [-9.2, 0, 21],
    testPoster: [-2.45, 4.8, 21.92],
    testRotacion: 118,
    joystickDistance: 0,
    joystickAngle: 90,
    uiStep: 1,

    createAvatarItem: -1,
    emojiAnimation: '01 idle',
    video: false,

    name: '',
    email: '',
    hairStyle: 8,
    hairColor: 0,
    glasses: 0,
    beardStyle: 0,
    beardColor: 0,
    skinColor: 0,
    topStyle: 5,
    topColor: 0,
    trousersStyle: 0,
    trousersColor: 0,
    accessoriesStyle: 0,
    accessoriesColor: 0,
    shoesStyle: 0,
    shoesColor: 0,

    popup: 0,
    popupSub: 0,
    popupLogo: 0,
    popupModel: 0,
    popupVideo: 0,
    popupEdit: 0,

    poster_1_url: '',
    poster_2_url: '',
    poster_3_url: '',
    poster_4_url: '',
    poster_5_url: '',
    poster_6_url: '',
    poster_7_url: '',

    logo_url: '',
    video_url: '',

    model_1_url: '',
    model_2_url: '',
    model_3_url: '',
    model_4_url: '',
    model_5_url: '',
    model_6_url: '',
    model_7_url: '',
    model_8_url: '',
    model_9_url: '',
    model_10_url: '',
    model_11_url: '',
    model_12_url: '',
    model_13_url: '',
    model_14_url: '',
    test_model_url: 'assets/models/shoes/freedom-gundam.glb',
    test_size_url: 1,


    shoe_1_url: 'assets/models/shoes/shoes1.glb',
  }
})

export default useStore