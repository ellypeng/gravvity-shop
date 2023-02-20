import create from 'zustand'
import ntf1 from '../public/assets/textures/NFT_wall_poster_1.png'
import ntf2 from '../public/assets/textures/NFT_wall_poster_2.png'
import ntf3 from '../public/assets/textures/NFT_wall_poster_3.png'
import ntf4 from '../public/assets/textures/NFT_wall_poster_4.png'
import ntf5 from '../public/assets/textures/NFT_wall_poster_5.png'
import place1 from '../public/assets/textures/Placement_1.png'
import place2 from '../public/assets/textures/Placement_2.png'
import Asmodeus_UR_Card from '../public/assets/textures/model_3d_img/Asmodeus_UR_Card.png'
import Barbatos_UR_Card from '../public/assets/textures/model_3d_img/Barbatos_UR_Card.png'
import Beezelbub_UR_Card from '../public/assets/textures/model_3d_img/Beezelbub_UR_Card.png'
import Leviathan_UR_Card from '../public/assets/textures/model_3d_img/Leviathan_UR_Card.png'
import Mammon_UR_Card from '../public/assets/textures/model_3d_img/Mammon_UR_Card.png'
import ObeyMeComicV1 from '../public/assets/textures/model_3d_img/ObeyMeComicV1.png'
import ObeyMeComicV2 from '../public/assets/textures/model_3d_img/ObeyMeComicV2.png'






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
    popupIndex: 0,
    popupSub: 0,
    popupLogo: 0,
    popupModel: 0,
    popupModelIndex: 0,
    popupVideo: 0,
    popupEdit: 0,
    popupCart: 0,
    popMyCart: 0,
    popMyCart3D: 0,
    popThanks: 0,

    poster_1_url: '',
    poster_2_url: '',
    poster_3_url: '',
    poster_4_url: '',
    poster_5_url: '',
    poster_6_url: '',
    poster_7_url: '',

    logo_url: '',
    video_url: '',

    shooping: [],

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
        size_model_1: 2,
        url_model_1: 'assets/models/comic/Asmodeus_UR_Card.glb',
        position_1: [-1.4, 2.1, -11.1],
        rotation_1: [0, Math.PI, 0]
      },
      //ironman
      model_2: {
        size_model_2: 2,
        url_model_2: 'assets/models/comic/Barbatos_UR_Card.glb',
        position_2: [0.4, 2.1, -11.1],
        rotation_2: [0, Math.PI, 0]
      },
      model_3: {
        size_model_3: 2,
        url_model_3: 'assets/models/comic/Beezelbub_UR_Card.glb',
        position_3: [2.2, 2.1, -11.1],
        rotation_3: [0, Math.PI, 0]
      },
      model_4: {
        size_model_4: 2,
        url_model_4: 'assets/models/comic/Leviathan_UR_Card.glb',
        position_4: [-1.4, 2.1, -6.04],
        rotation_4: [0, Math.PI, 0]
      },
      model_5: {
        size_model_5: 2,
        url_model_5: 'assets/models/comic/Mammon_UR_Card.glb',
        position_5: [0.4, 2.1, -6.04],
        rotation_5: [0, Math.PI, 0]
      },
      model_6: {
        size_model_6: 2,
        url_model_6: 'assets/models/comic/ObeyMe!ComicV1.glb',
        position_6: [2.2, 2.1, -6.04],
        rotation_6: [0, Math.PI, 0]
      },
      model_7: {
        size_model_7: 1.5,
        url_model_7: 'assets/models/shoes/2_mens-full-length-trench-coat-shirt-tie-outfit.glb',
        position_7: [-11.8, 0.3, -9.05],
        rotation_7: [0, 315 * Math.PI / 180, 0]
      },
      model_8: {
        size_model_8: 1.5,
        url_model_8: 'assets/models/shoes/1_mens-magican-outfit.glb',
        position_8: [-11.7, 0.5, -10.7],
        rotation_8: [0, 320 * Math.PI / 180, 0]
      },
      model_9: {
        size_model_9: 1.5,
        url_model_9: 'assets/models/shoes/gang_long_coat.glb',
        position_9: [0.1, 0.9, 1.80],
        rotation_9: [0, 260 * Math.PI / 180, 0]
      },
      model_10: {
        size_model_10: 1.5,
        url_model_10: 'assets/models/shoes/ObeyMe!ComicV1.glb',
        position_10: [13.67, 3.14, -10.85],
        rotation_10: [0, -Math.PI * 40 / 180, 0]
      },
      model_11: {
        size_model_11: 1.5,
        url_model_11: 'assets/models/shoes/Obey Me! Comic V2.glb',
        position_11: [15.17, 3.14, -8.85],
        rotation_11: [0, -Math.PI * 50 / 180, 0]
      },
      model_12: {
        size_model_12: 2.3,
        url_model_12: 'assets/models/clothes/1 mens-steampunk-frack-coat.glb',
        position_12: [15.57, 0.3, 6.85],
        rotation_12: [0, 80 * Math.PI / 180, 0]
      },
      model_13: {
        size_model_13: 2.8,
        url_model_13: 'assets/models/clothes/2 mens-double-breasted-uniform-jacket.glb',
        position_13: [15.57, -0.7, 9.25],
        rotation_13: [0, Math.PI, 0]
      },
      model_14: {
        size_model_14: 2.8,
        url_model_14: 'assets/models/clothes/3 fbx-mens-standing-collar-zipped-up-jacket.glb',
        position_14: [15.57, -0.7, 12],
        rotation_14: [0, Math.PI, 0]
      },
      model_15: {
        size_model_15: 3.2,
        url_model_15: 'assets/models/clothes/4 mens-pinkerton-vest-shirt-combo.glb',
        position_15: [14.7, -1.4, 14.3],
        rotation_15: [0, 220 * Math.PI / 180, 0]
      },
      model_16: {
        size_model_16: 2.5,
        url_model_16: 'assets/models/clothes/5 closed-front-winter-coat-with-cape.glb',
        position_16: [12.17, 0, 14.9],
        rotation_16: [0, 75 * Math.PI / 180, 0]
      },
      model_17: {
        size_model_17: 2.5,
        url_model_17: 'assets/models/clothes/6 female-asian-lolita-mini-dress.glb',
        position_17: [9.87, 0, 14.9],
        rotation_17: [0, 75 * Math.PI / 180, 0]
      },
      model_18: {
        size_model_18: 2.5,
        url_model_18: 'assets/models/clothes/7 steampunk-dress-with-frill-blouse-and-suspenders.glb',
        position_18: [7.6, 0, 14.9],
        rotation_18: [0, 75 * Math.PI / 180, 0]
      },
    },

    objetos: [
      { "nombre": "Satan", "precio": 80.25, "categoria": "NFT", "imagen": ntf1, onlyLeft: 20 },
      { "nombre": "Satan", "precio": 80.32, "categoria": "NFT", "imagen": ntf1, onlyLeft: 20 },
      { "nombre": "Group Start", "precio": 25.45, "categoria": "NFT", "imagen": ntf2, onlyLeft: 20 },
      { "nombre": "Manmon V.1", "precio": 15.54, "categoria": "NFT", "imagen": ntf3, onlyLeft: 20 },
      { "nombre": "Manmon V.2", "precio": 120.56, "categoria": "NFT", "imagen": ntf4, onlyLeft: 20 },
      { "nombre": "Manmon V.3", "precio": 30.76, "categoria": "NFT", "imagen": ntf5, onlyLeft: 20 },
      { "nombre": "Pack NFT", "precio": 100.12, "categoria": "NFT", "imagen": place1, onlyLeft: 20 },
      { "nombre": "Shop Merch", "precio": 300.34, "categoria": "NFT", "imagen": place2, onlyLeft: 20 },
    ],


    objetos3D: [
      { "nombre": "Obey Me Outfit #1", "precio": 80.51, "categoria": "NFT", "imagen": 'https://via.placeholder.com/150x150?text=Camisa+algodón', onlyLeft: 20 },
      { "nombre": "Obey Me comic #4", "precio": 80.26, "categoria": "NFT", "imagen": Asmodeus_UR_Card, onlyLeft: 20 },
      { "nombre": "Obey Me comic #5", "precio": 80.14, "categoria": "NFT", "imagen": Barbatos_UR_Card, onlyLeft: 20 },
      { "nombre": "Obey Me comic #6", "precio": 25.21, "categoria": "NFT", "imagen": Beezelbub_UR_Card, onlyLeft: 20 },
      { "nombre": "Obey Me comic #1", "precio": 15.42, "categoria": "NFT", "imagen": Leviathan_UR_Card, onlyLeft: 20 },
      { "nombre": "Obey Me comic #2", "precio": 120.32, "categoria": "NFT", "imagen": Mammon_UR_Card, onlyLeft: 20 },
      { "nombre": "Obey Me comic #3", "precio": 30.56, "categoria": "NFT", "imagen": ObeyMeComicV1, onlyLeft: 20 },
      { "nombre": "Obey Me Outfit #6", "precio": 100.54, "categoria": "NFT", "imagen": 'https://via.placeholder.com/150x150?text=Camisa+algodón', onlyLeft: 20 },
      { "nombre": "Obey Me Outfit #7", "precio": 300.32, "categoria": "NFT", "imagen": 'https://via.placeholder.com/150x150?text=Camisa+algodón', onlyLeft: 20 },
      { "nombre": "Obey Me Outfit #8", "precio": 300.21, "categoria": "NFT", "imagen": 'https://via.placeholder.com/150x150?text=Camisa+algodón', onlyLeft: 20 },
      { "nombre": "Obey Me comic #7", "precio": 300.22, "categoria": "NFT", "imagen": ObeyMeComicV1, onlyLeft: 20 },
      { "nombre": "Obey Me comic #8", "precio": 300.32, "categoria": "NFT", "imagen": ObeyMeComicV2, onlyLeft: 20 },
      { "nombre": "Obey Me Outfit #11", "precio": 300.43, "categoria": "NFT", "imagen": 'https://via.placeholder.com/150x150?text=Camisa+algodón', onlyLeft: 20 },
      { "nombre": "Obey Me Outfit #12", "precio": 300.16, "categoria": "NFT", "imagen": 'https://via.placeholder.com/150x150?text=Camisa+algodón', onlyLeft: 20 },
      { "nombre": "Obey Me Outfit #13", "precio": 300.76, "categoria": "NFT", "imagen": 'https://via.placeholder.com/150x150?text=Camisa+algodón', onlyLeft: 20 },
      { "nombre": "Obey Me Outfit #14", "precio": 300.98, "categoria": "NFT", "imagen": 'https://via.placeholder.com/150x150?text=Camisa+algodón', onlyLeft: 20 },
      { "nombre": "Obey Me Outfit #15", "precio": 300.87, "categoria": "NFT", "imagen": 'https://via.placeholder.com/150x150?text=Camisa+algodón', onlyLeft: 20 },
      { "nombre": "Obey Me Outfit #16", "precio": 300.99, "categoria": "NFT", "imagen": 'https://via.placeholder.com/150x150?text=Camisa+algodón', onlyLeft: 20 },
      { "nombre": "Obey Me Outfit #17", "precio": 300.99, "categoria": "NFT", "imagen": 'https://via.placeholder.com/150x150?text=Camisa+algodón', onlyLeft: 20 },

    ],

    shoe_1_url: 'assets/models/shoes/shoes1.glb',
  }
})

export default useStore