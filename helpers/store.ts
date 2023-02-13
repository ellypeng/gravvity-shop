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

    models_configs: {
      //dragoball_1
      model_1: {
        size_model_1: 1,
        url_model_1: 'assets/models/comic/dragonball_1.glb',
        position_1: [-1.4, 1.4, -11.1],
        rotation_1: [0, Math.PI, 0]
      },
      //ironman
      model_2: {
        size_model_2: 1,
        url_model_2: 'assets/models/comic/ironman.glb',
        position_2: [2.2, 1.4, -11.1],
        rotation_2: [0, Math.PI, 0]
      },
      model_3: {
        size_model_3: 1,
        url_model_3: 'assets/models/comic/spidermancomic.glb',
        position_3: [2.2, 1.4, -11.1],
        rotation_3: [0, Math.PI, 0]
      },
      model_4: {
        size_model_4: 1,
        url_model_4: 'assets/models/comic/spiderman.glb',
        position_4: [-1.4, 1.4, -6.04],
        rotation_4: [0, Math.PI, 0]
      },
      model_5: {
        size_model_5: 1,
        url_model_5: 'assets/models/comic/starwar.glb',
        position_5: [0.4, 1.4, -6.04],
        rotation_5: [0, Math.PI, 0]
      },
      model_6: {
        size_model_6: 1,
        url_model_6: 'assets/models/comic/venom.glb',
        position_6: [2.2, 1.4, -6.04],
        rotation_6: [0, Math.PI, 0]
      },
      model_7: {
        size_model_7: 1.3,
        url_model_7: 'assets/models/shoes/spiderman.glb',
        position_7: [-11.12, 0.6, -8.5],
        rotation_7: [0, Math.PI / 4, 0]
      },
      model_8: {
        size_model_8: 1.4,
        url_model_8: 'assets/models/shoes/darth_vader.glb',
        position_8: [-11.32, 3.3, -10.5],
        rotation_8: [0, Math.PI / 4, 0]
      },
      model_9: {
        size_model_9: 0.12,
        url_model_9: 'assets/models/shoes/freedom-gundam.glb',
        position_9: [0, 2.2, 2],
        rotation_9: [0, Math.PI, 0]
      },
      model_10: {
        size_model_10: 0.004,
        url_model_10: 'assets/models/shoes/transformer.glb',
        position_10: [13.67, 3.14, -10.85],
        rotation_10: [0, -Math.PI * 40 / 180, 0]
      },
      model_11: {
        size_model_11: 0.004,
        url_model_11: 'assets/models/shoes/transformer.glb',
        position_11: [15.17, 3.14, -8.85],
        rotation_11: [0, -Math.PI * 40 / 180, 0]
      },
      model_12: {
        size_model_12: 0.03,
        url_model_12: 'assets/models/clothes/black.glb',
        position_12: [15.57, -1, 6.85],
        rotation_12: [-Math.PI / 2, 0, -Math.PI / 2]
      },
      model_13: {
        size_model_13: 0.03,
        url_model_13: 'assets/models/clothes/men.glb',
        position_13: [15.57, -1, 9.25],
        rotation_13: [Math.PI / 2, -Math.PI / 2, Math.PI / 2]
      },
      model_14: {
        size_model_14: 0.03,
        url_model_14: 'assets/models/clothes/heavy_venom.glb',
        position_14: [15.57, -1, 11.45],
        rotation_14: [Math.PI / 2, -Math.PI / 2, Math.PI / 2]
      },
      model_15: {
        size_model_15: 0.03,
        url_model_15: 'assets/models/clothes/loose.glb',
        position_15: [12.17, -1, 14.9],
        rotation_15: [0, Math.PI, 0]
      },
      model_16: {
        size_model_16: 0.12,
        url_model_16: 'assets/models/clothes/marble.glb',
        position_16: [0, 2.2, 2],
        rotation_16: [0, Math.PI, 0]
      },
      model_17: {
        size_model_17: 0.03,
        url_model_17: 'assets/models/clothes/heavy_spider.glb',
        position_17: [9.87, -1, 14.9],
        rotation_17: [0, Math.PI, 0]
      },
      model_18: {
        size_model_18: 0.03,
        url_model_18: 'assets/models/clothes/spider.glb',
        position_18: [9.87, -1, 14.9],
        rotation_18: [0, Math.PI, 0]
      },
    },


    shoe_1_url: 'assets/models/shoes/shoes1.glb',
  }
})

export default useStore