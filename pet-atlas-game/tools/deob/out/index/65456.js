var _0x5cba6d = require(/*webcrack:missing*/"./3892.js");
var _0x5df579 = require(/*webcrack:missing*/"./66848.js");
function _0x49bc2a() {
  var _0x17ab53 = this;
  var _0x1c6c10 = _0x17ab53._self._c;
  return _0x1c6c10("div", {
    attrs: {
      id: "petatlas2game"
    }
  }, [_0x1c6c10("router-view")], 1);
}
var _0x4a63d4 = [];
var _0x42e6ac = {
  name: "PetAtlas",
  mounted: () => {
    document.title = "口袋精灵2 | 免费单机游戏";
  }
};
var _0x109397 = _0x42e6ac;
var _0x4f33e3 = require(/*webcrack:missing*/"./81656.js");
var _0xd65b = (0, _0x4f33e3.A)(_0x109397, _0x49bc2a, _0x4a63d4, false, null, null, null);
var _0x566bf6 = _0xd65b.exports;
require(/*webcrack:missing*/"./28743.js");
var _0x5e8a21 = require(/*webcrack:missing*/"./93518.js");
var _0x2e3e3c = require("./2406.js");
const _0xa6cfae = ["金", "木", "水", "火", "土", "神"];
const _0x1bb32e = {
  namespaced: true,
  state() {
    return {
      totalPets: [],
      fightPetId: null,
      curPetsId: [],
      pastureMaxCapacity: 60,
      curPetId: null
    };
  },
  getters: {
    fightPet(_0x4d4f2d) {
      const {
        totalPets: _0x5856fb,
        fightPetId: _0x2f4b13
      } = _0x4d4f2d;
      return _0x5856fb.find(_0x148c0c => _0x148c0c.id === _0x2f4b13);
    },
    curPets(_0x235ead) {
      const {
        totalPets: _0x390697,
        curPetsId: _0x2284ce
      } = _0x235ead;
      const _0x43ae62 = _0x2284ce.map(_0x4f947f => _0x390697.find(_0x35bf51 => _0x35bf51.id === _0x4f947f));
      _0x43ae62.map(_0x2a67f9 => {
        _0xa6cfae.find((_0x585ae9, _0x3e46b7) => {
          if (_0x2a67f9.attribute === _0x585ae9) {
            _0x2a67f9.sort = _0x3e46b7 + 1;
          }
        });
      });
      _0x43ae62.sort((_0x5186ea, _0x567a1b) => _0x567a1b.figure - _0x5186ea.figure);
      _0x43ae62.sort((_0x1fd6db, _0x24d494) => _0x24d494.rank - _0x1fd6db.rank);
      _0x43ae62.sort((_0x4a6583, _0x4a559a) => _0x4a559a.growth - _0x4a6583.growth);
      _0x43ae62.sort((_0x223980, _0xf498e9) => _0xf498e9.level - _0x223980.level);
      _0x43ae62.sort((_0x2a3976, _0x2307a5) => _0x2307a5.sort - _0x2a3976.sort);
      return _0x43ae62;
    },
    petsNum(_0x136f5a) {
      return _0x136f5a.totalPets.length;
    },
    pasturePets(_0x4cd946) {
      const {
        totalPets: _0x200260,
        curPetsId: _0x3d07e4
      } = _0x4cd946;
      const _0x486ec7 = [];
      for (let _0x373085 of _0x200260) {
        if (!_0x3d07e4.includes(_0x373085.id)) {
          _0x486ec7.push(_0x373085);
        }
      }
      _0x486ec7.map(_0x4b4fec => {
        _0xa6cfae.find((_0x2de64a, _0x518f6a) => {
          if (_0x4b4fec.attribute === _0x2de64a) {
            _0x4b4fec.sort = _0x518f6a + 1;
          }
        });
      });
      _0x486ec7.sort((_0x12064b, _0x4f599f) => _0x4f599f.figure - _0x12064b.figure);
      _0x486ec7.sort((_0x2ede76, _0xdbff30) => _0xdbff30.rank - _0x2ede76.rank);
      _0x486ec7.sort((_0x30267e, _0x4a2ad6) => _0x4a2ad6.growth - _0x30267e.growth);
      _0x486ec7.sort((_0x1dd97c, _0x3a1a2a) => _0x3a1a2a.level - _0x1dd97c.level);
      _0x486ec7.sort((_0x3f34d4, _0x1d6ecf) => _0x1d6ecf.sort - _0x3f34d4.sort);
      return _0x486ec7;
    },
    curPet(_0x1b7429) {
      const {
        totalPets: _0x163c77,
        curPetId: _0x17a2b2
      } = _0x1b7429;
      return _0x163c77.find(_0x221e63 => _0x221e63.id === _0x17a2b2);
    },
    showPet(_0x3d8c06) {
      return _0x540173 => _0x3d8c06.totalPets.find(_0x30ee0c => _0x30ee0c.id === _0x540173);
    }
  },
  mutations: {
    changeFightPetById(_0x3b7f29, _0x3231e1) {
      const {
        fightPetId: _0x2192c6,
        curPetsId: _0x195804
      } = _0x3b7f29;
      const {
        id: _0x33ce03,
        handle: _0x236cbb
      } = _0x3231e1;
      if (_0x236cbb) {
        if (_0x236cbb === "init") {
          const _0x4e37a5 = this.getters["petModule/curPets"];
          _0x3b7f29.fightPetId = _0x4e37a5[0].id;
        } else if (_0x236cbb === "exit") {
          _0x3b7f29.fightPetId = null;
        }
      } else {
        if (!_0x195804.find(_0xfad008 => _0xfad008 === _0x33ce03)) {
          return;
        }
        if (_0x2192c6 === _0x33ce03) {
          this._watcherVM.$gameMessage.info(_0x2e3e3c.ZK);
          return;
        }
        _0x3b7f29.fightPetId = _0x33ce03;
        this._watcherVM.$gameMessage.info(_0x2e3e3c.VA);
      }
    },
    changeCurPetById(_0x4a07a9, _0x503427) {
      const {
        id: _0x164e36,
        handle: _0x2acaa6
      } = _0x503427;
      if (_0x2acaa6) {
        if (_0x2acaa6 === "INIT") {
          _0x4a07a9.curPetId = this.getters["petModule/curPets"][0].id;
        } else if (_0x2acaa6 === "EXIT") {
          _0x4a07a9.curPetId = null;
        }
      } else {
        _0x4a07a9.curPetId = _0x164e36;
      }
    },
    addFightPetExp(_0x2c70b2, _0x464111) {
      const _0x2c0810 = _0x2c70b2.totalPets.find(_0x468dde => _0x468dde.id === _0x2c70b2.fightPetId);
      _0x2c0810.exp += _0x464111;
    },
    addCurPetExp(_0x6d77ff, _0xabcf1) {
      const _0x527b5d = _0x6d77ff.totalPets.find(_0x183dd1 => _0x183dd1.id === _0x6d77ff.curPetId);
      _0x527b5d.exp += _0xabcf1;
    },
    changeCurPets(_0x40a7fb, _0x1ae70b) {
      const {
        command: _0x5d07ca,
        petId: _0x354225,
        resolve: _0xcb838e,
        reject: _0x37df85
      } = _0x1ae70b;
      const {
        curPetsId: _0x52c440,
        pastureMaxCapacity: _0x511eb2,
        totalPets: _0xd72d02
      } = _0x40a7fb;
      const _0x782b7a = _0xd72d02.find(_0x45a073 => _0x45a073.id === _0x354225);
      if (_0x782b7a) {
        if (_0x5d07ca === "carry") {
          if (_0x52c440.length >= 4) {
            _0x37df85({
              status: "exceedNum",
              message: _0x2e3e3c.eX
            });
            return;
          } else {
            _0x52c440.push(_0x354225);
            _0xcb838e({
              status: "success",
              message: _0x2e3e3c.D9
            });
            return;
          }
        }
        if (_0x5d07ca === "deposit") {
          if (_0x354225 === _0x40a7fb.fightPetId) {
            _0x37df85({
              status: "isFightPet",
              message: "寄存失败：" + this.getters["petModule/fightPet"].name + "正在野外战斗中，请先脱离战斗状态！"
            });
            return;
          }
          if (_0x52c440.length <= 1) {
            _0x37df85({
              status: "fail",
              message: _0x2e3e3c.Tt
            });
            return;
          }
          if (_0xd72d02.length - _0x52c440.length >= _0x511eb2) {
            _0x37df85({
              status: "exceedNum",
              message: _0x2e3e3c.ML
            });
            return;
          }
          const _0x3235de = _0x52c440.findIndex(_0x392b42 => _0x392b42 === _0x354225);
          _0x52c440.splice(_0x3235de, 1);
          _0x40a7fb.curPetId = this.getters["petModule/curPets"][_0x52c440.length - 1].id;
          _0xcb838e({
            status: "success",
            message: _0x2e3e3c.ai
          });
        }
      } else {
        _0x37df85({
          status: "nonExist",
          message: _0x2e3e3c.aR
        });
      }
    },
    deletePasturePet(_0x368a59, _0x5166bb) {
      const {
        totalPets: _0x30f242
      } = _0x368a59;
      const {
        pasturePet: _0x273560,
        resolve: _0x4a3c64,
        reject: _0x5d2507
      } = _0x5166bb;
      const _0x4167a3 = _0x30f242.findIndex(_0x368a8f => _0x368a8f.id === _0x273560.id);
      if (_0x4167a3 > -1) {
        _0x30f242.splice(_0x4167a3, 1);
        _0x4a3c64({
          status: "success",
          message: "抛弃牧场宠物 " + _0x273560.name + " 成功!"
        });
      } else {
        _0x5d2507({
          status: "fail",
          message: "在牧场中没有发现宠物 " + _0x273560.name + "， 请再次检查！"
        });
      }
    },
    initPets(_0x4204cb, _0x3e6d15) {
      const {
        totalPets: _0x359552,
        curPetsId: _0x3e06e3,
        pastureMaxCapacity: _0x454b97
      } = _0x3e6d15;
      _0x4204cb.totalPets = _0x359552;
      _0x4204cb.curPetsId = _0x3e06e3;
      _0x4204cb.fightPetId = null;
      _0x4204cb.curPetId = null;
      _0x4204cb.pastureMaxCapacity = _0x454b97;
    },
    improvePetMagic(_0x199e9a, _0x10e9f8) {
      const {
        id: _0xa4c8c0,
        magicName: _0x858140
      } = _0x10e9f8;
      const _0x221a50 = _0x199e9a.totalPets.find(_0xec1823 => _0xec1823.id === _0xa4c8c0);
      const _0x2055f2 = _0x221a50.magic.findIndex(_0x21c2c4 => _0x21c2c4.name === _0x858140);
      const _0x1b8247 = _0x221a50.magic[_0x2055f2];
      _0x1b8247.rank++;
      _0x221a50.magic.splice(_0x2055f2, 1, _0x1b8247);
    },
    increaseMaxCapacity(_0x2d7f5c) {
      _0x2d7f5c.pastureMaxCapacity += 5;
    },
    addPet(_0x34a29f, _0x572285) {
      const {
        totalPets: _0x176d31,
        curPetsId: _0x1d6d62
      } = _0x34a29f;
      const {
        pet: _0x443484,
        handle: _0x2a2454,
        resolve: _0x39021e
      } = _0x572285;
      _0x176d31.push(_0x443484);
      _0x1d6d62.push(_0x443484.id);
      if (_0x2a2454 === "catchPet") {
        _0x39021e({
          status: "success",
          message: "恭喜您捕捉到一只 " + _0x443484.name + " 宝宝！"
        });
      }
      if (_0x2a2454 === "egg") {
        _0x39021e({
          status: "success",
          message: "使用成功：您获得一只" + _0x443484.name + "！"
        });
      }
    },
    learnMagic(_0x1c23b9, _0x1795e3) {
      const {
        magicDetail: _0x59020d,
        resolve: _0x466e76,
        reject: _0x2c7b29
      } = _0x1795e3;
      const _0x423eec = _0x1c23b9.totalPets.find(_0x3add10 => _0x3add10.id === _0x1c23b9.curPetId);
      if (_0x423eec.magic.find(_0x3a74cd => _0x3a74cd.name === _0x59020d.name)) {
        _0x2c7b29({
          status: "fail",
          message: _0x423eec.name + "已经掌握" + _0x59020d.name + "了！"
        });
      } else if (_0x59020d.attr && _0x423eec.attribute !== _0x59020d.attr) {
        _0x2c7b29({
          status: "fail",
          message: _0x59020d.name + "只有" + _0x59020d.attr + "系宠物才能学习！"
        });
      } else {
        _0x423eec.magic.push(_0x59020d);
        _0x466e76({
          status: "success",
          message: "您的" + _0x423eec.name + "成功领悟" + _0x59020d.name + "!"
        });
      }
    }
  }
};
var _0x4c241b = _0x1bb32e;
var _0x2bf3fb = require("./72321.js");
var _0x44fcd9 = require("./36682.js");
var _0x3beee7 = require(/*webcrack:missing*/"./41314.js");
var _0x4d9b0d = _0x3beee7;
const _0x1a6221 = {
  namespaced: true,
  state() {
    return {
      playerName: null,
      goldCoin: 0,
      figure: null,
      prestige: 0,
      crystal: 0,
      metal: null,
      packageDetail: {
        maxCapacity: 60,
        packageProps: []
      },
      storeDetail: {
        maxCapacity: 60,
        storeProps: []
      },
      wornEquipments: []
    };
  },
  mutations: {
    changePlayerDetail(_0x44c4f2, _0xf4ce40) {
      let {
        sKey: _0x5c3b16,
        sValue: _0x5aa06c
      } = _0xf4ce40;
      if (_0x5c3b16 === "name" || _0x5c3b16 === "figure") {
        _0x44c4f2[_0x5c3b16] = _0x5aa06c;
      } else {
        _0x44c4f2[_0x5c3b16] += _0x5aa06c;
      }
    },
    changePackageProps(_0x1e9cd5, _0x1e84bb) {
      const {
        handle: _0x1fcebb,
        props: _0x3c6531,
        resolve: _0x2898ff,
        reject: _0x3c086c,
        num: _0x370ab1
      } = _0x1e84bb;
      const {
        packageProps: _0x2e4626,
        maxCapacity: _0x34b24b
      } = _0x1e9cd5.packageDetail;
      if (_0x1fcebb === "add" || _0x1fcebb === "removeEquipment") {
        let _0x47ba37 = _0x2e4626.length;
        for (let _0xaa1dc8 = 0; _0xaa1dc8 < _0x3c6531.length; _0xaa1dc8++) {
          if (_0x3c6531[_0xaa1dc8].type === "equipment") {
            continue;
          }
          let _0x554c30 = _0x2e4626.find(_0x2800e4 => {
            _0x2800e4.name;
            _0x3c6531[_0xaa1dc8].name;
          });
          if (_0x554c30) {
            _0x47ba37--;
          }
        }
        if (_0x47ba37 >= _0x34b24b) {
          _0x3c086c({
            status: "overload",
            message: _0x2e3e3c.aC
          });
          return;
        }
        for (let _0x454a73 = 0; _0x454a73 < _0x3c6531.length; _0x454a73++) {
          let _0x21c905;
          let _0x14fd0e = _0x2e4626.find((_0x392b48, _0x7cecf0) => {
            if (_0x392b48.name === _0x3c6531[_0x454a73].name) {
              _0x21c905 = _0x7cecf0;
              return true;
            }
          });
          if (_0x14fd0e && _0x14fd0e.type !== "equipment") {
            _0x14fd0e.num += _0x3c6531[_0x454a73].num;
            _0x2e4626.splice(_0x21c905, 1, _0x14fd0e);
          } else {
            _0x3c6531[_0x454a73].rand ||= (0, _0x2bf3fb.DU)(8);
            _0x2e4626.push(_0x3c6531[_0x454a73]);
          }
        }
        _0x2898ff({
          status: "success",
          message: _0x2e3e3c.$m
        });
        return;
      }
      const _0x10e43d = _0x3c6531[0];
      if (!_0x10e43d || _0x3c6531.length > 1) {
        _0x3c086c({
          status: "fail",
          message: _0x2e3e3c.uD
        });
        return;
      }
      let _0x1591b9;
      _0x1591b9 = _0x10e43d.type === "equipment" ? _0x2e4626.findIndex(_0x26a2b3 => _0x26a2b3.rand === _0x10e43d.rand) : _0x2e4626.findIndex(_0x1df0bb => _0x1df0bb.name === _0x10e43d.name);
      if (_0x1591b9 === -1) {
        _0x3c086c({
          status: "fail",
          message: "没有在背包中找到" + _0x10e43d.name + "!"
        });
        return;
      }
      let _0x56ef39 = "";
      let _0x2e371b = "";
      switch (_0x1fcebb) {
        case "wearEquipment":
        case "moveToStore":
        case "delete":
          _0x2e4626.splice(_0x1591b9, 1);
          _0x56ef39 = "success";
          _0x2e371b = _0x1fcebb === "moveToStore" ? "您的道具 " + _0x10e43d.name + " 成功存入仓库！" : "丢弃道具 " + _0x10e43d.name + " 成功！";
          break;
        case "reduce":
        case "sale":
          if (_0x2e4626[_0x1591b9].num >= _0x370ab1) {
            _0x2e4626[_0x1591b9].num -= _0x370ab1;
            if (_0x2e4626[_0x1591b9].num >= 1) {
              _0x2e4626.splice(_0x1591b9, 1, _0x2e4626[_0x1591b9]);
            }
            if (_0x2e4626[_0x1591b9].num <= 0) {
              _0x2e4626.splice(_0x1591b9, 1);
            }
            _0x56ef39 = "success";
            _0x2e371b = _0x1fcebb === "reduce" ? "消耗道具成功！" : "出售道具成功！";
          } else {
            _0x56ef39 = "fail";
            _0x2e371b = "您的" + _0x10e43d.name + "数量不足！";
          }
          break;
        default:
          _0x56ef39 = "fail";
          _0x2e371b = _0x2e3e3c.uD;
      }
      if (_0x56ef39 === "success") {
        _0x2898ff({
          status: _0x56ef39,
          message: _0x2e371b
        });
      } else {
        _0x3c086c({
          status: _0x56ef39,
          message: _0x2e371b
        });
      }
    },
    changeStoreProps(_0x4157af, _0x3b6dc8) {
      const {
        handle: _0x35ee49,
        props: _0x332d4d,
        resolve: _0x129152,
        reject: _0x18d0e3
      } = _0x3b6dc8;
      const {
        storeProps: _0x3b2872,
        maxCapacity: _0x45932d
      } = _0x4157af.storeDetail;
      const _0x3a3869 = _0x332d4d[0];
      if (!_0x3a3869 || _0x332d4d.length > 1) {
        _0x18d0e3({
          status: "fail",
          message: _0x2e3e3c.z5
        });
        return;
      }
      let _0x4d4054;
      _0x4d4054 = _0x3a3869.type === "equipment" ? _0x3b2872.findIndex(_0x1e84b3 => _0x1e84b3.rand === _0x3a3869.rand) : _0x3b2872.findIndex(_0x1f80c4 => _0x1f80c4.name === _0x3a3869.name);
      if (_0x35ee49 !== "moveToPackage" || _0x4d4054 !== -1) {
        if (_0x35ee49 === "add") {
          if (_0x4d4054 > -1) {
            _0x3b2872[_0x4d4054].num += _0x3a3869.num;
            _0x3b2872.splice(_0x4d4054, 1, _0x3b2872[_0x4d4054]);
          } else {
            if (_0x3b2872.length >= _0x45932d) {
              _0x18d0e3({
                status: "overload",
                message: _0x2e3e3c.eQ
              });
              return;
            }
            _0x3b2872.push(_0x3a3869);
          }
          _0x129152(null);
        }
        if (_0x35ee49 === "moveToPackage") {
          _0x3b2872.splice(_0x4d4054, 1);
          _0x129152({
            status: "success",
            message: "您的道具 " + _0x3a3869.name + " 成功放入背包！"
          });
        }
        if (_0x35ee49 === "delete") {
          _0x3b2872.splice(_0x4d4054, 1);
          _0x129152({
            status: "success",
            message: "删除仓库道具" + _0x3a3869.name + "成功！"
          });
        }
      } else {
        _0x18d0e3({
          status: "fail",
          message: _0x2e3e3c.$3
        });
      }
    },
    sortPlayerProps(_0x27cb8e, _0x3cf006) {
      const {
        handle: _0x35c543,
        resolve: _0x3b106f
      } = _0x3cf006;
      let _0x335801 = _0x35c543 === "package" ? _0x27cb8e.packageDetail.packageProps : _0x27cb8e.storeDetail.storeProps;
      if (_0x335801.length === 0) {
        _0x3b106f({
          status: "success",
          message: (_0x35c543 === "package" ? "背包" : "仓库") + "整理完毕！"
        });
        return;
      }
      _0x335801.sort((_0x27434d, _0x3ee31d) => _0x27434d.typeSort - _0x3ee31d.typeSort);
      const _0x2f97c6 = [];
      _0x2f97c6.push([_0x335801[0]]);
      let _0x2a99ca = _0x335801[0].type;
      for (let _0x132752 = 1; _0x132752 < _0x335801.length; _0x132752++) {
        if (_0x335801[_0x132752].type === _0x2a99ca) {
          _0x2f97c6[_0x2f97c6.length - 1].push(_0x335801[_0x132752]);
        } else {
          _0x2f97c6[_0x2f97c6.length - 1].sort((_0x1828b5, _0x16bcb5) => _0x1828b5.sort - _0x16bcb5.sort);
          _0x2f97c6.push([_0x335801[_0x132752]]);
          _0x2a99ca = _0x335801[_0x132752].type;
        }
      }
      _0x2f97c6[_0x2f97c6.length - 1].sort((_0x39724f, _0x2c907a) => _0x39724f.sort - _0x2c907a.sort);
      if (_0x35c543 === "package") {
        _0x27cb8e.packageDetail.packageProps = _0x2f97c6.flat();
      } else {
        _0x27cb8e.storeDetail.storeProps = _0x2f97c6.flat();
      }
      _0x3b106f({
        status: "success",
        message: (_0x35c543 === "package" ? "背包" : "仓库") + "整理完毕！"
      });
    },
    moveProp(_0x4846eb, _0x262f21) {
      const {
        handle: _0x2925c6,
        props: _0x3e9b97,
        resolve: _0xeb7ff5,
        reject: _0x453446
      } = _0x262f21;
      if (_0x3e9b97 && _0x2925c6) {
        if (_0x2925c6 === "moveToStore") {
          new SSPromise((_0x5e757a, _0x45abb0) => {
            this.commit("playerModule/changeStoreProps", {
              handle: "add",
              props: _0x3e9b97,
              resolve: _0x5e757a,
              reject: _0x45abb0
            });
          }).then(() => {
            this.commit("playerModule/changePackageProps", {
              handle: _0x2925c6,
              props: _0x3e9b97,
              resolve: _0xeb7ff5,
              reject: _0x453446
            });
          }).catch(_0x581034 => {
            _0x453446(_0x581034);
          });
        }
        if (_0x2925c6 === "moveToPackage") {
          new SSPromise((_0x21006f, _0x79cbd6) => {
            this.commit("playerModule/changePackageProps", {
              handle: "add",
              props: _0x3e9b97,
              resolve: _0x21006f,
              reject: _0x79cbd6
            });
          }).then(() => {
            this.commit("playerModule/changeStoreProps", {
              handle: _0x2925c6,
              props: _0x3e9b97,
              resolve: _0xeb7ff5,
              reject: _0x453446
            });
          }).catch(_0x221ef5 => {
            _0x453446(_0x221ef5);
          });
        }
      } else {
        _0x453446(_0x2e3e3c.bH);
      }
    },
    initPlayerAsset(_0x4c26a8, _0x5a3f2e) {
      const {
        goldCoin: _0x106774,
        prestige: _0x4a339d,
        crystal: _0x491c30,
        packageDetail: _0x165aad,
        storeDetail: _0x13ba57
      } = _0x5a3f2e;
      _0x4c26a8.goldCoin = _0x106774;
      _0x4c26a8.prestige = _0x4a339d;
      _0x4c26a8.crystal = _0x491c30;
      _0x4c26a8.packageDetail = _0x165aad;
      _0x4c26a8.storeDetail = _0x13ba57;
    },
    initPlayerDetail(_0x113775, _0x1619d7) {
      _0x113775.playerName = _0x1619d7.playerName;
      _0x113775.figure = _0x1619d7.figure;
    },
    increaseMaxCapacity(_0x19c545, _0x36a48b) {
      const {
        title: _0x339466
      } = _0x36a48b;
      _0x19c545[_0x339466].maxCapacity += 5;
    },
    changeWornEquipments(_0x5dd53e, _0x43cdc4) {
      const {
        prop: _0x26f414,
        handle: _0x1c3b2f,
        resolve: _0x21a37d,
        reject: _0x2821f4
      } = _0x43cdc4;
      const _0x249668 = this.getters["petModule/curPet"];
      if (!_0x249668) {
        _0x2821f4({
          status: "fail",
          message: "请在部分场景(如：宠物资料)选中宠物后" + (_0x1c3b2f === "removeEquipment" ? "取下装备" : "使用装备") + "！"
        });
        return;
      }
      const _0x5910e1 = _0x5dd53e.wornEquipments.findIndex(_0x334a81 => _0x334a81?.petId === _0x249668.id);
      let _0xea9892;
      let _0x56450c;
      let _0x4a0dfe;
      if (_0x5910e1 === -1) {
        if (_0x1c3b2f === "wearEquipment") {
          _0xea9892 = {
            petId: _0x249668.id,
            equipments: [_0x26f414]
          };
        } else if (_0x1c3b2f === "removeEquipment") {
          _0x2821f4({
            status: "fail",
            message: _0x2e3e3c.O6
          });
          return;
        }
      } else {
        _0xea9892 = _0x5dd53e.wornEquipments[_0x5910e1];
        const _0x23503f = _0x26f414.img.toString();
        const _0xa99aca = _0x23503f.charAt(_0x23503f.length - 1);
        _0x56450c = _0xea9892.equipments.findIndex(_0x4d1fab => {
          const _0x42f2c9 = _0x4d1fab.img.toString();
          return _0x42f2c9.charAt(_0x42f2c9.length - 1) === _0xa99aca;
        });
        _0x4a0dfe = _0xea9892.equipments[_0x56450c];
      }
      function _0x249ece() {
        if (_0x5910e1 === -1) {
          _0x5dd53e.wornEquipments.push(_0xea9892);
          _0x21a37d({
            status: "success",
            message: _0x249668.name + "穿戴 " + _0x26f414.name + " 成功！"
          });
        } else if (_0x56450c === -1) {
          _0xea9892.equipments.push(_0x26f414);
          _0x5dd53e.wornEquipments.splice(_0x5910e1, 1, _0xea9892);
          _0x21a37d({
            status: "success",
            message: _0x249668.name + "穿戴 " + _0x26f414.name + " 成功！"
          });
        } else {
          new SSPromise((_0x31c3d8, _0x4f7881) => {
            this.commit("playerModule/changePackageProps", {
              props: [_0x4a0dfe],
              handle: "add",
              resolve: _0x31c3d8,
              reject: _0x4f7881
            });
          }).then(() => {
            _0xea9892.equipments.splice(_0x56450c, 1, _0x26f414);
            _0x5dd53e.wornEquipments.splice(_0x5910e1, 1, _0xea9892);
            _0x21a37d({
              status: "success",
              message: _0x249668.name + "穿戴 " + _0x26f414.name + " 成功！"
            });
          }).catch(_0x23b068 => {
            _0x2821f4(_0x23b068);
          });
        }
      }
      function _0x23b89f() {
        _0xea9892.equipments.splice(_0x56450c, 1);
        if (_0xea9892.equipments.length > 0) {
          _0x5dd53e.wornEquipments.splice(_0x5910e1, 1, _0xea9892);
        } else {
          _0x5dd53e.wornEquipments.splice(_0x5910e1, 1);
        }
        _0x21a37d({
          status: "success",
          message: "取下装备 " + _0x4a0dfe.name + " 成功！"
        });
      }
      if (_0x1c3b2f === "wearEquipment") {
        new SSPromise((_0xa03bed, _0x4d0205) => {
          this.commit("playerModule/changePackageProps", {
            handle: _0x1c3b2f,
            props: [_0x26f414],
            resolve: _0xa03bed,
            reject: _0x4d0205
          });
        }).then(() => {
          _0x249ece.call(this);
        }).catch(_0x10940b => {
          _0x2821f4(_0x10940b);
        });
      }
      if (_0x1c3b2f === "removeEquipment") {
        new SSPromise((_0x2bddd9, _0x120a4d) => {
          this.commit("playerModule/changePackageProps", {
            handle: _0x1c3b2f,
            props: [_0x4a0dfe],
            resolve: _0x2bddd9,
            reject: _0x120a4d
          });
        }).then(() => {
          _0x23b89f.call(this);
        }).catch(_0x2c8a45 => {
          _0x2821f4(_0x2c8a45);
        });
      }
    },
    initWornEquipments(_0x31a0bc, _0x385ce4) {
      _0x31a0bc.wornEquipments = _0x385ce4.wornEquipments;
    }
  },
  getters: {
    equippedPet(_0x43a09f) {
      const _0x2cfdc5 = _0x43a09f.wornEquipments;
      return function (_0x21fc86) {
        const _0x2953ed = this["petModule/" + _0x21fc86];
        if (!_0x2953ed) {
          return null;
        }
        const _0x3a878f = _0x2cfdc5.find(_0x68ef97 => _0x68ef97.petId === _0x2953ed.id);
        const _0x3cfc15 = _0x4d9b0d(_0x2953ed);
        if (!_0x3a878f) {
          return _0x3cfc15;
        }
        const _0x4cc48e = _0x3a878f.equipments;
        for (let _0x2f974b = 0; _0x2f974b < _0x4cc48e.length; _0x2f974b++) {
          for (let _0x313b99 of _0x4cc48e[_0x2f974b].effects) {
            _0x313b99 = _0x313b99.split(":");
            _0x3cfc15[_0x313b99[0]] = _0x3cfc15[_0x313b99[0]] ? Number(_0x3cfc15[_0x313b99[0]]) : 0;
            _0x3cfc15[_0x313b99[0]] += Number(_0x313b99[1]);
          }
        }
        const _0x22c067 = [];
        _0x4cc48e.map(_0x317f10 => {
          const _0x516a95 = _0x317f10.description.filter(_0x4f594d => _0x4f594d[0] === "<");
          let _0x483680;
          for (let _0x595f28 = 0; _0x595f28 < _0x516a95.length; _0x595f28++) {
            _0x483680 = _0x516a95[_0x595f28].match(/[^<>]+(?=\s\(\d\/(\d+)\))/);
            if (_0x483680) {
              break;
            }
          }
          if (!_0x483680) {
            return;
          }
          const _0x2486d1 = _0x22c067.find(_0x4c7ccc => _0x4c7ccc.name === _0x483680[0]);
          if (_0x2486d1) {
            _0x2486d1.len++;
          } else {
            const _0x14dff4 = {
              name: _0x483680[0],
              effects: _0x44fcd9.w2.find(_0x11c588 => _0x11c588.name === _0x483680[0]).effects,
              len: 1
            };
            _0x22c067.push(_0x14dff4);
          }
        });
        for (let _0x234230 of _0x22c067) {
          while (_0x234230.len >= 2) {
            let _0x2edf6f = _0x234230.effects[_0x234230.len - 2];
            _0x2edf6f = _0x2edf6f.split(":");
            _0x3cfc15[_0x2edf6f[0]] = _0x3cfc15[_0x2edf6f[0]] ? Number(_0x3cfc15[_0x2edf6f[0]]) : 0;
            _0x3cfc15[_0x2edf6f[0]] += Number(_0x2edf6f[1]);
            _0x234230.len--;
          }
        }
        return _0x3cfc15;
      };
    }
  }
};
var _0x203cca = _0x1a6221;
const _0x40ac30 = {
  namespaced: true,
  state() {
    return {
      missions: null,
      todayTime: null
    };
  },
  mutations: {
    handleAcceptedMission(_0x3a7fae, _0x12f950) {
      const {
        mission: _0x27218c,
        handle: _0x2d5fcf,
        resolve: _0x7c3b0a,
        reject: _0x40b06e
      } = _0x12f950;
      function _0xa28e99() {
        const _0xb49c91 = _0x3a7fae.missions[_0x27218c.type].findIndex(_0x1f42fb => _0x1f42fb.ic === _0x27218c.ic);
        if (_0xb49c91 === -1) {
          _0x40b06e({
            status: "fail",
            message: _0x2e3e3c.Yi
          });
          return;
        }
        const _0x5600c6 = _0x4d9b0d(_0x27218c);
        _0x5600c6.status = "unfinished";
        if (_0x5600c6.target) {
          _0x5600c6.progress = _0x4d9b0d(_0x5600c6.target);
          if (_0x5600c6.progress?.monsters) {
            for (let _0x3353a2 of _0x5600c6.progress.monsters) {
              _0x3353a2.num = 0;
            }
          }
        } else {
          _0x5600c6.status = "finished";
        }
        _0x27218c.status = "unreachable";
        _0x3a7fae.missions.accepted.push(_0x5600c6);
        if (_0x5600c6.type === "daily") {
          _0x5600c6.startTime = this._vm.dayjs(new Date(), "YYYY-MM-DD hh:mm:ss").format();
        }
        _0x7c3b0a({
          status: "success",
          type: "accepted",
          message: _0x2e3e3c.g0
        });
        this._vm.$gameLocalStorage.setItem("acceptedMissions", _0x3a7fae.missions.accepted);
      }
      function _0x571a09() {
        const _0x42e758 = _0x3a7fae.missions.accepted.findIndex(_0x3700c8 => _0x3700c8.ic === _0x27218c.ic);
        if (_0x42e758 === -1) {
          _0x40b06e({
            status: "fail",
            message: _0x2e3e3c.Ff
          });
          return;
        }
        const _0x3ae78f = _0x3a7fae.missions[_0x27218c.type].find(_0x27b760 => _0x27b760.ic === _0x27218c.ic);
        if (_0x3ae78f) {
          _0x3ae78f.status = "acceptable";
        }
        _0x3a7fae.missions.accepted.splice(_0x42e758, 1);
        _0x7c3b0a({
          status: "success",
          type: "giveup",
          message: _0x2e3e3c.O7
        });
        this._vm.$gameLocalStorage.setItem("acceptedMissions", _0x3a7fae.missions.accepted);
      }
      function _0x162ae4() {
        if (!_0x27218c.status === "finished") {
          _0x40b06e({
            status: "fail",
            message: _0x2e3e3c.Cz
          });
          return;
        }
        const _0x3d60da = _0x3a7fae.missions.accepted.findIndex(_0x56ffe3 => _0x56ffe3.ic === _0x27218c.ic);
        const _0x2d9600 = _0x3a7fae.missions[_0x27218c.type].find(_0x31f097 => _0x31f097.ic === _0x27218c.ic);
        if (_0x3d60da !== -1) {
          if (_0x2d9600) {
            if (_0x27218c.type !== "daily" || this._vm.dayjs(_0x27218c.startTime).isToday()) {
              if (_0x27218c.rewards?.props) {
                const _0x39800b = _0x27218c.rewards.props;
                const _0x2bbe17 = this.state.playerModule.packageDetail.packageProps.length;
                const _0xa5a37b = this.state.playerModule.packageDetail.maxCapacity;
                if (_0x2bbe17 + _0x39800b.length > _0xa5a37b) {
                  _0x40b06e({
                    status: "fail",
                    message: _0x2e3e3c.rV
                  });
                  return;
                }
              }
              if (_0x27218c.target) {
                const _0x45d930 = _0x27218c.target.monsters;
                if (_0x45d930) {
                  const _0x219dc2 = _0x27218c.progress;
                  let _0x2fd573 = false;
                  for (let _0x5cbf47 in _0x45d930) {
                    const _0x2b7b06 = _0x219dc2.monsters[_0x5cbf47];
                    if (_0x2b7b06.num < _0x45d930[_0x5cbf47].num) {
                      _0x2fd573 = true;
                      break;
                    }
                  }
                  if (_0x2fd573) {
                    _0x40b06e({
                      status: "fail",
                      message: _0x2e3e3c.a4
                    });
                    return;
                  }
                }
                const _0x2ccb29 = _0x27218c.target.props;
                if (_0x2ccb29) {
                  const _0x2df0c0 = this.state.playerModule.packageDetail.packageProps;
                  let _0x420dcb = false;
                  for (let _0x5c1a60 of _0x2ccb29) {
                    const _0x1e1eba = _0x2df0c0.find(_0x24ffa3 => _0x24ffa3.name === _0x5c1a60.name && _0x24ffa3.num >= _0x5c1a60.num);
                    if (!_0x1e1eba) {
                      _0x420dcb = true;
                      break;
                    }
                  }
                  if (_0x420dcb) {
                    _0x40b06e({
                      status: "fail",
                      message: _0x2e3e3c.vS
                    });
                    return;
                  }
                  for (let _0xee84a7 of _0x2ccb29) {
                    this.commit("playerModule/changePackageProps", {
                      handle: "reduce",
                      props: [_0xee84a7],
                      num: _0xee84a7.num,
                      resolve: _0x2bf3fb.lQ,
                      reject: _0x2bf3fb.lQ
                    });
                  }
                }
              }
              if (_0x27218c.rewards) {
                const _0x4b7f29 = _0x27218c.rewards.props;
                const _0x5c30af = ["goldCoin", "prestige", "crystal"];
                if (_0x4b7f29 && _0x4b7f29.length > 0) {
                  let _0x2b07ec = [];
                  for (let _0x12d008 of _0x4b7f29) {
                    let _0x393008 = _0x44fcd9.uP.find(_0x4933e1 => _0x4933e1.name === _0x12d008.name);
                    _0x393008 = _0x4d9b0d(_0x393008);
                    _0x393008.num = _0x12d008.num;
                    _0x2b07ec.push(_0x393008);
                  }
                  this.commit("playerModule/changePackageProps", {
                    handle: "add",
                    props: _0x2b07ec,
                    resolve: _0x2bf3fb.lQ,
                    reject: _0x2bf3fb.lQ
                  });
                }
                for (let _0x54f855 of _0x5c30af) {
                  if (_0x27218c.rewards[_0x54f855] && _0x27218c.rewards[_0x54f855] > 0) {
                    this.commit("playerModule/changePlayerDetail", {
                      sKey: _0x54f855,
                      sValue: _0x27218c.rewards[_0x54f855]
                    });
                  }
                }
              }
              if (["story", "activity", "exclusive", "daily"].includes(_0x27218c.type)) {
                _0x2d9600.status = "unreachable";
                const _0x4c70a5 = _0x3a7fae.missions[_0x27218c.type].find(_0x35672b => _0x35672b.lIc === _0x27218c.ic);
                if (_0x4c70a5) {
                  _0x4c70a5.status = "acceptable";
                }
              } else if (_0x27218c.type === "swap") {
                _0x2d9600.status = "acceptable";
              }
              _0x3a7fae.missions.accepted.splice(_0x3d60da, 1);
              _0x7c3b0a({
                status: "success",
                message: _0x2e3e3c.bB
              });
              this._vm.$gameLocalStorage.setItem("acceptedMissions", _0x3a7fae.missions.accepted);
              if (["story", "activity", "exclusive", "daily"].includes(_0x27218c.type)) {
                const _0x1e5646 = this._vm.$gameLocalStorage.getItem("finishedMissions") || [];
                const _0x44ea47 = {
                  ic: _0x27218c.ic,
                  type: _0x27218c.type
                };
                if (_0x27218c.type === "daily") {
                  _0x44ea47.completedTime = this._vm.dayjs(new Date(), "YYYY-MM-DD hh:mm:ss").format();
                }
                _0x1e5646.push(_0x44ea47);
                this._vm.$gameLocalStorage.setItem("finishedMissions", _0x1e5646);
              }
            } else {
              _0x40b06e({
                status: "fail",
                message: _0x2e3e3c.M
              });
            }
          } else {
            _0x40b06e({
              status: "fail",
              message: _0x2e3e3c.jq
            });
          }
        } else {
          _0x40b06e({
            status: "fail",
            message: _0x2e3e3c.bZ
          });
        }
      }
      function _0x46a20e() {
        for (let _0x5deb62 of _0x27218c) {
          const _0x1583e7 = _0x3a7fae.missions.accepted.findIndex(_0x41f21f => _0x41f21f.ic === _0x5deb62);
          if (_0x1583e7 !== -1) {
            _0x3a7fae.missions.accepted.splice(_0x1583e7, 1);
          }
        }
      }
      if (_0x2d5fcf === "accept") {
        _0xa28e99.call(this);
      }
      if (_0x2d5fcf === "giveup") {
        _0x571a09.call(this);
      }
      if (_0x2d5fcf === "finish") {
        _0x162ae4.call(this);
      }
      if (_0x2d5fcf === "remove") {
        _0x46a20e.call(this);
      }
    },
    changeAcceptedMissionProgress(_0x907e01, _0x3275ca) {
      const {
        mission: _0x89b348
      } = _0x3275ca;
      const _0x41df25 = _0x907e01.missions.accepted;
      const _0x583a8c = _0x41df25.findIndex(_0x1d290d => _0x1d290d.ic === _0x89b348.ic);
      if (_0x583a8c === -1) {
        return;
      }
      let _0x46a8ce = true;
      const _0xf5c342 = _0x89b348.progress.monsters;
      const _0x40cbec = _0x89b348.target.monsters;
      for (let _0xceccf3 in _0xf5c342) {
        if (_0xf5c342[_0xceccf3].num < _0x40cbec[_0xceccf3].num) {
          _0x46a8ce = false;
          break;
        }
      }
      if (_0x46a8ce) {
        _0x89b348.status = "finished";
      }
      _0x907e01.missions.accepted.splice(_0x583a8c, 1, _0x89b348);
      this._vm.$gameLocalStorage.setItem("acceptedMissions", _0x907e01.missions.accepted);
    },
    initMissions(_0x1aba19, _0x1b6b10) {
      _0x1aba19.missions = _0x4d9b0d(_0x44fcd9.Uh);
      let {
        acceptedMissions: _0x11c3db,
        finishedMissions: _0x13b248
      } = _0x1b6b10;
      const _0x3032e8 = this._vm.dayjs(new Date(), "yyyy-mm-dd hh:mm:ss");
      for (let _0x299589 = 0; _0x299589 < _0x13b248.length; _0x299589++) {
        const _0x5bebab = _0x13b248[_0x299589];
        const _0x3524ba = _0x1aba19.missions[_0x5bebab.type].findIndex(_0x25042d => _0x25042d.ic === _0x5bebab.ic);
        if (_0x3524ba === -1) {
          continue;
        }
        const _0x149a71 = _0x1aba19.missions[_0x5bebab.type][_0x3524ba];
        if (_0x5bebab.type === "daily") {
          const _0xe77331 = this._vm.dayjs(_0x5bebab.completedTime);
          if (_0xe77331.isAfter(_0x3032e8)) {
            __rum.log("BUG_MISSION_MESSAGE", _0x2e3e3c.IJ);
            this._vm.$gameMessage.info(_0x2e3e3c.IJ);
            continue;
          }
          if (_0xe77331.isBefore(_0x3032e8) && !_0xe77331.isToday()) {
            _0x13b248[_0x299589] = null;
            continue;
          }
        }
        _0x149a71.status = "unreachable";
        if (["story", "activity", "exclusive", "daily"].includes(_0x149a71.type)) {
          const _0x40c5a4 = _0x1aba19.missions[_0x5bebab.type].find(_0x14eb78 => _0x14eb78.lIc === _0x149a71.ic);
          if (_0x40c5a4) {
            _0x40c5a4.status = "acceptable";
          }
        }
      }
      _0x13b248 = _0x13b248.filter(_0x469d28 => _0x469d28 !== null);
      this._vm.$gameLocalStorage.setItem("finishedMissions", _0x13b248);
      for (let _0xc2fa6d = 0; _0xc2fa6d < _0x11c3db.length; _0xc2fa6d++) {
        const _0x3354d9 = _0x11c3db[_0xc2fa6d];
        const _0x1ef473 = _0x1aba19.missions[_0x3354d9.type].findIndex(_0x55889b => _0x55889b.ic === _0x3354d9.ic);
        if (_0x1ef473 !== -1) {
          if (_0x3354d9.type === "daily") {
            const _0x81eea5 = this._vm.dayjs(_0x3354d9.startTime);
            if (_0x81eea5.isAfter(_0x3032e8)) {
              __rum.log("BUG_MISSION_MESSAGE", _0x2e3e3c.IJ);
              this._vm.$gameMessage.info(_0x2e3e3c.IJ);
              continue;
            }
            if (_0x81eea5.isBefore(_0x3032e8) && !_0x81eea5.isToday()) {
              _0x11c3db[_0xc2fa6d] = null;
              continue;
            }
          }
          _0x1aba19.missions[_0x3354d9.type][_0x1ef473].status = "unreachable";
        }
      }
      _0x11c3db = _0x11c3db.filter(_0x13aadc => _0x13aadc !== null);
      this._vm.$gameLocalStorage.setItem("acceptedMissions", _0x11c3db);
      _0x1aba19.missions.accepted = _0x11c3db;
      _0x1aba19.todayTime = this._vm.dayjs(new Date(), "YYYY-MM-DD hh:mm:ss").format();
    },
    updateMissionStatus(_0x4edd90, _0x414733) {
      const {
        mission: _0x2a1110,
        missionType: _0x4e55a3,
        status: _0x545a46
      } = _0x414733;
      let _0x3e7e0e = _0x4edd90.missions[_0x4e55a3].findIndex(_0x455005 => _0x455005.ic === _0x2a1110.ic);
      if (_0x3e7e0e === -1) {
        throw new Error("根据任务条件更新任务出错：store.mutations.updateMissionStatus");
      }
      const _0xb20275 = _0x4edd90.missions[_0x4e55a3][_0x3e7e0e];
      _0xb20275.status = _0x545a46;
      _0x4edd90.missions[_0x4e55a3].splice(_0x3e7e0e, 1, _0xb20275);
    },
    updateTodayTime(_0x3b4552, _0x474373) {
      _0x3b4552.totayTime = _0x474373.totayTime;
    }
  }
};
var _0x2d22b2 = _0x40ac30;
var _0x46ea4c = require("./59390.js");
function _0x3cf601(_0x3b9dcf, _0x3ec2a6) {
  const {
    name: _0x21097c,
    resolve: _0x12514f,
    reject: _0x4ff17b
  } = _0x3ec2a6;
  const _0x98427 = _0x3b9dcf.dungeonsDetail.findIndex(_0x34901f => _0x34901f.name === _0x21097c);
  if (_0x98427 === -1) {
    return _0x4ff17b({
      status: "fail",
      message: "副本进度计算出错，没有找到《" + _0x21097c + "》副本！"
    });
  }
  const _0x22c388 = _0x3b9dcf.dungeonsDetail[_0x98427];
  _0x22c388.isCompleted = false;
  _0x22c388.curNum = 1;
  _0x22c388.completedTime = null;
  _0x22c388.startTime = this._vm.dayjs(new Date(), "YYYY-MM-DD hh:mm:ss").format();
  _0x3b9dcf.dungeonsDetail.splice(_0x98427, 1, _0x22c388);
  this._vm.$gameLocalStorage.setItem("dungeonsDetail", _0x3b9dcf.dungeonsDetail);
  _0x12514f({
    status: "success",
    message: "重启《" + _0x22c388.name + "》副本成功！"
  });
}
_0x5df579.Ay.use(_0x5e8a21.Ay);
const _0x3b2bba = new _0x5e8a21.Ay.Store({
  state: {
    dungeonsDetail: null,
    medalProgress: null
  },
  getters: {
    dungeonDetail(_0x32c1ab) {
      return function (_0x5e30e5, _0x240dfb) {
        const _0xc0bad9 = _0x32c1ab.dungeonsDetail.find(_0x550cd6 => _0x550cd6.title === _0x5e30e5);
        if (_0xc0bad9) {
          if (_0xc0bad9.completedTime) {
            let _0x923404 = _0x240dfb(_0xc0bad9.completedTime).isToday();
            const _0x5aef8a = _0x240dfb(new Date(), "yyyy-mm-dd hh:mm:ss");
            const _0x2fe1df = _0x240dfb(_0xc0bad9.completedTime);
            if (_0x2fe1df.isAfter(_0x5aef8a)) {
              _0x923404 = true;
              __rum.log("BUG_DUNGEON_MESSAGE", _0x2e3e3c.KA);
              this._vm.$gameMessage.info(_0x2e3e3c.KA);
            }
            _0xc0bad9.isCompleted = _0x923404;
            _0xc0bad9.completedTime = _0x923404 ? _0xc0bad9.completedTime : null;
          }
          return _0xc0bad9;
        }
      };
    },
    medalSelected(_0xb7b170) {
      const _0x5962c2 = _0xb7b170.medalProgress.find(_0x40ef38 => _0x40ef38.status === "selected");
      if (!_0x5962c2) {
        return null;
      }
      const _0x835d81 = _0x46ea4c.HQ.find(_0x5d625f => _0x5d625f.id === _0x5962c2.mid);
      return _0x835d81;
    }
  },
  mutations: {
    handleGroceryStore(_0x3cef72, _0xb389e9) {
      const {
        handle: _0xa86db8,
        resolve: _0x1e5db1,
        reject: _0x568e8c,
        prop: _0x4f6f9a,
        num: _0x313bc3
      } = _0xb389e9;
      let _0x316dd8 = Number.MAX_SAFE_INTEGER;
      if (_0xa86db8 === "goldCoinBuy" || _0xa86db8 === "prestigeBuy") {
        _0x316dd8 = _0x4f6f9a.price * _0x4f6f9a.num;
        const _0x18d487 = _0xa86db8 === "goldCoinBuy" ? _0x3cef72.playerModule.goldCoin : _0x3cef72.playerModule.prestige;
        if (_0x18d487 < _0x316dd8) {
          _0x568e8c({
            status: "fail",
            message: "购买失败，您当前拥有的" + (_0xa86db8 === "goldCoinBuy" ? "金币数量" : "威望值") + "不足以支付本次购买！"
          });
          return;
        }
        const _0x4a0b68 = _0x44fcd9.uP.find(_0x33e410 => _0x33e410.name === _0x4f6f9a.name);
        _0x4f6f9a.price = _0x4a0b68.price;
        delete _0x4f6f9a.priceType;
        new SSPromise((_0x4ced40, _0x27c1c7) => {
          this.commit("playerModule/changePackageProps", {
            handle: "add",
            props: [_0x4f6f9a],
            resolve: _0x4ced40,
            reject: _0x27c1c7
          });
        }).then(() => {
          this.commit("playerModule/changePlayerDetail", {
            sKey: _0xa86db8 === "goldCoinBuy" ? "goldCoin" : "prestige",
            sValue: Number(-_0x316dd8)
          });
          _0x1e5db1({
            status: "success",
            message: _0x2e3e3c.Jo
          });
        }).catch(_0x4e8270 => {
          _0x568e8c(_0x4e8270);
        });
      }
      if (_0xa86db8 === "goldCoinSale") {
        _0x316dd8 = _0x4f6f9a.price * _0x313bc3;
        new SSPromise((_0x7d3fce, _0x2a9049) => {
          this.commit("playerModule/changePackageProps", {
            handle: "sale",
            props: [_0x4f6f9a],
            num: _0x313bc3,
            resolve: _0x7d3fce,
            reject: _0x2a9049
          });
        }).then(() => {
          this.commit("playerModule/changePlayerDetail", {
            sKey: "goldCoin",
            sValue: Number(_0x316dd8)
          });
          _0x1e5db1({
            status: "success",
            message: _0x2e3e3c.JW
          });
        });
      }
    },
    handleSmithy(_0x29477d, _0x36fafb) {
      const {
        handle: _0xd2979c,
        resolve: _0x367ce9,
        reject: _0x4a4e29,
        prop: _0x893028
      } = _0x36fafb;
      let _0x4bed57 = Number.MAX_SAFE_INTEGER;
      if (_0xd2979c === "smithyBuy") {
        _0x4bed57 = _0x893028.price * _0x893028.num;
        const _0x3bb952 = _0x29477d.playerModule.prestige;
        if (_0x3bb952 < _0x4bed57) {
          _0x4a4e29({
            status: "fail",
            message: _0x2e3e3c.CD
          });
          return;
        }
        const _0xfad4b4 = _0x44fcd9.uP.find(_0x45c6e0 => _0x45c6e0.name === _0x893028.name);
        _0x893028.price = _0xfad4b4.price;
        delete _0x893028.priceType;
        new SSPromise((_0x2322a3, _0x32ed96) => {
          this.commit("playerModule/changePackageProps", {
            handle: "add",
            props: [_0x893028],
            resolve: _0x2322a3,
            reject: _0x32ed96
          });
        }).then(() => {
          this.commit("playerModule/changePlayerDetail", {
            sKey: "prestige",
            sValue: Number(-_0x4bed57)
          });
          _0x367ce9({
            status: "success",
            message: _0x2e3e3c.Jo
          });
        }).catch(_0x2e91cb => {
          _0x4a4e29(_0x2e91cb);
        });
      }
    },
    initDungeonsDetail(_0x540e9b, _0x1128ee) {
      const _0x53e67f = this._vm.dayjs(new Date(), "yyyy-mm-dd hh:mm:ss");
      for (let _0x7f3102 of _0x1128ee) {
        if (!_0x7f3102.startTime) {
          continue;
        }
        const _0xc21ee9 = this._vm.dayjs(_0x7f3102.startTime);
        if (_0xc21ee9.isAfter(_0x53e67f)) {
          _0x7f3102.curNum = 1;
          _0x7f3102.completedTime = _0x53e67f;
          _0x7f3102.isCompleted = true;
          __rum.log("BUG_DUNGEON_MESSAGE", _0x2e3e3c.KA);
          this._vm.$gameMessage.info(_0x2e3e3c.KA);
          continue;
        }
        const _0x2a2873 = _0xc21ee9.isToday() && _0xc21ee9.isBefore(_0x53e67f);
        if (!_0x2a2873) {
          _0x7f3102.startTime = null;
          _0x7f3102.curNum = 1;
          _0x7f3102.completedTime = null;
          _0x7f3102.isCompleted = false;
        }
      }
      _0x540e9b.dungeonsDetail = _0x1128ee;
    },
    updateDungeonDetail(_0x48ab20, _0x483f48) {
      const {
        name: _0x1c1343,
        resolve: _0x2bb78e,
        reject: _0x1a17ce
      } = _0x483f48;
      const _0x17aa90 = _0x48ab20.dungeonsDetail.findIndex(_0x4dc748 => _0x4dc748.name === _0x1c1343);
      if (_0x17aa90 === -1) {
        return _0x1a17ce({
          status: "fail",
          message: "副本进度计算出错，没有找到《" + _0x1c1343 + "》副本！"
        });
      }
      const _0x36ebcc = _0x48ab20.dungeonsDetail[_0x17aa90];
      if (_0x36ebcc.isCompleted) {
        return _0x1a17ce({
          status: "fail",
          message: "《" + _0x36ebcc.name + "》副本不能重复完成！"
        });
      } else if (_0x36ebcc.curNum === _0x36ebcc.totalNum) {
        _0x36ebcc.isCompleted = true;
        _0x36ebcc.completedTime = this._vm.dayjs(new Date(), "YYYY-MM-DD hh:mm:ss").format();
        _0x36ebcc.curNum = 1;
        _0x48ab20.dungeonsDetail.splice(_0x17aa90, 1, _0x36ebcc);
        this._vm.$gameLocalStorage.setItem("dungeonsDetail", _0x48ab20.dungeonsDetail);
        return _0x2bb78e({
          status: "complete",
          message: "恭喜您完成《" + _0x36ebcc.name + "》副本！"
        });
      } else {
        _0x36ebcc.startTime ||= this._vm.dayjs(new Date(), "YYYY-MM-DD hh:mm:ss").format();
        _0x36ebcc.curNum++;
        _0x48ab20.dungeonsDetail.splice(_0x17aa90, 1, _0x36ebcc);
        this._vm.$gameLocalStorage.setItem("dungeonsDetail", _0x48ab20.dungeonsDetail);
        _0x2bb78e({
          status: "next",
          message: _0x2e3e3c.ev
        });
        return;
      }
    },
    handleMysteryStore(_0x40ac86, _0x2d7b94) {
      const {
        handle: _0xc57e84,
        prop: _0x4c9427,
        resolve: _0x3fe59e,
        reject: _0x252f47
      } = _0x2d7b94;
      let _0xb9a0f8 = Number.MAX_SAFE_INTEGER;
      if (_0xc57e84 === "crystalBuy") {
        _0xb9a0f8 = _0x4c9427.price * _0x4c9427.num;
        const _0x3e442c = _0x40ac86.playerModule.crystal;
        if (_0x3e442c < _0xb9a0f8) {
          _0x252f47({
            status: "fail",
            message: _0x2e3e3c.aS
          });
          return;
        }
        const _0xf7a24d = _0x44fcd9.uP.find(_0x1b44d1 => _0x1b44d1.name === _0x4c9427.name);
        _0x4c9427.price = _0xf7a24d.price;
        delete _0x4c9427.priceType;
        new SSPromise((_0x5baddd, _0x56e731) => {
          this.commit("playerModule/changePackageProps", {
            handle: "add",
            props: [_0x4c9427],
            resolve: _0x5baddd,
            reject: _0x56e731
          });
        }).then(() => {
          this.commit("playerModule/changePlayerDetail", {
            sKey: "crystal",
            sValue: Number(-_0xb9a0f8)
          });
          _0x3fe59e({
            status: "success",
            message: _0x2e3e3c.Jo
          });
        }).catch(_0x47f047 => {
          _0x252f47(_0x47f047);
        });
      }
    },
    refreshDungeonDetail(_0x5fad73, _0x14010a) {
      _0x3cf601.call(this, _0x5fad73, _0x14010a);
    },
    judgeDungeonDetail(_0x5ef845, _0x22623e) {
      const {
        dungeonDetail: _0x5d4643,
        resolve: _0x116a9d,
        reject: _0x5199b6
      } = _0x22623e;
      const _0x2bcabc = this._vm.dayjs(new Date(), "yyyy-mm-dd hh:mm:ss");
      const _0x560ffa = _0x5d4643.startTime && this._vm.dayjs(_0x5d4643.startTime);
      if (!!_0x560ffa && (!_0x560ffa.isBefore(_0x2bcabc) || !_0x560ffa.isToday())) {
        if (_0x560ffa.isBefore(_0x2bcabc) && !_0x560ffa.isToday()) {
          _0x3cf601.call(this, _0x5ef845, {
            name: _0x5d4643.name,
            resolve: _0x116a9d,
            reject: _0x5199b6
          });
        }
        if (_0x560ffa.isAfter(_0x2bcabc)) {
          __rum.log("BUG_DUNGEON_MESSAGE", _0x2e3e3c.KA);
          _0x5199b6({
            status: "fail",
            message: _0x2e3e3c.KA
          });
          return;
        } else {
          return undefined;
        }
      }
      _0x116a9d({
        status: "success",
        message: null
      });
    },
    refreshMedalProgress(_0x1e6d19) {
      const _0x2ac252 = _0x1e6d19.medalProgress.filter(_0x47c93a => _0x47c93a.status === "disabled");
      const _0x187d38 = this.state.petModule.totalPets;
      const _0x5a60ae = [...this.state.playerModule.packageDetail.packageProps, ...this.state.playerModule.storeDetail.storeProps];
      const _0x58668b = this.state.playerModule.wornEquipments;
      if (_0x58668b && _0x58668b.length > 0) {
        _0x58668b.forEach(_0x54532d => {
          const _0x44eb5f = _0x54532d.equipments;
          _0x5a60ae.push(..._0x44eb5f);
        });
      }
      _0x2ac252.forEach(_0x528608 => {
        if (_0x528608.type === "ownAssert") {
          const {
            goldCoin: _0x5d8b28,
            crystal: _0x3e02fe,
            prestige: _0x4f11f7
          } = this.state.playerModule;
          if (_0x5d8b28 >= 10000000 && _0x4f11f7 >= 3000 && _0x3e02fe >= 3000) {
            _0x528608.status = "optional";
          }
        } else if (_0x528608.type === "petProgress") {
          if (_0x187d38.find(_0x16a71e => _0x16a71e.level === 100 && _0x16a71e.growth === 100)) {
            _0x528608.status = "optional";
          }
        } else if (_0x528608.type === "collectEquipments") {
          const _0x2ef888 = _0x528608.target.props;
          let _0x289411 = 0;
          for (_0x289411; _0x289411 < _0x2ef888.length; _0x289411++) {
            if (!_0x5a60ae.find(_0x1ac15a => _0x1ac15a.name === _0x2ef888[_0x289411])) {
              break;
            }
          }
          if (_0x289411 === _0x2ef888.length) {
            _0x528608.status = "optional";
          }
        } else if (_0x528608.type === "collectPets") {
          const _0x164c7f = _0x528608.target.pets;
          let _0x2293ec = 0;
          for (_0x2293ec; _0x2293ec < _0x164c7f.length; _0x2293ec++) {
            if (!_0x187d38.find(_0x492d21 => _0x492d21.name === _0x164c7f[_0x2293ec])) {
              break;
            }
          }
          if (_0x2293ec === _0x164c7f.length) {
            _0x528608.status = "optional";
          }
        }
      });
      this._vm.$gameLocalStorage.setItem("medalProgress", _0x1e6d19.medalProgress);
    },
    updateMedalProgress(_0x371734, _0x711048) {
      const {
        type: _0x5b91e9
      } = _0x711048;
      const _0xc8667 = _0x371734.medalProgress.filter(_0x12b27b => _0x12b27b.status === "disabled" && _0x12b27b.type === _0x5b91e9);
      if (_0xc8667.length !== 0) {
        if (_0x5b91e9 === "capturePet") {
          const {
            map: _0x139d5a,
            pet: _0x4c0efa
          } = _0x711048;
          const _0x536d2e = _0xc8667.find(_0x172905 => _0x172905.target.map === _0x139d5a);
          if (_0x536d2e && _0x536d2e.target.monsters.includes(_0x4c0efa)) {
            _0x536d2e.target.curNum += 1;
            if (_0x536d2e.target.curNum >= _0x536d2e.target.endNum) {
              _0x536d2e.status = "optional";
            }
          }
        } else if (_0x5b91e9 === "defeatBoss" || _0x5b91e9 === "defeatMonster") {
          const {
            map: _0x5ca781,
            monster: _0x2635e1
          } = _0x711048;
          const _0x41bd3f = _0xc8667.find(_0x51e62f => _0x51e62f.target.map === _0x5ca781);
          if (_0x41bd3f && _0x41bd3f.target.monsters.includes(_0x2635e1)) {
            _0x41bd3f.target.curNum += 1;
            if (_0x41bd3f.target.curNum >= _0x41bd3f.target.endNum) {
              _0x41bd3f.status = "optional";
            }
          }
        }
        this._vm.$gameLocalStorage.setItem("medalProgress", _0x371734.medalProgress);
      }
    },
    initMedalProgress(_0x40ca7d, _0x23f2d6) {
      _0x40ca7d.medalProgress = _0x23f2d6;
      this._vm.$gameLocalStorage.setItem("medalProgress", _0x40ca7d.medalProgress);
    },
    selectMedal(_0x3b6645, _0x172c3f) {
      const {
        id: _0x3362ec,
        status: _0x5850f7
      } = _0x172c3f;
      if (_0x5850f7 === "disabled") {
        return;
      }
      const _0x46d55a = _0x3b6645.medalProgress;
      const _0x1819b0 = _0x46d55a.find(_0x546a61 => _0x546a61.mid === _0x3362ec);
      if (_0x5850f7 === "optional") {
        const _0x3a100c = _0x46d55a.find(_0x5b1fcf => _0x5b1fcf.status === "selected");
        if (_0x3a100c) {
          _0x3a100c.status = "optional";
        }
        _0x1819b0.status = "selected";
      } else if (_0x5850f7 === "selected") {
        _0x1819b0.status = "optional";
      }
      this._vm.$gameLocalStorage.setItem("medalProgress", _0x3b6645.medalProgress);
    },
    fixMedal(_0x13e139, _0x47e3cf) {
      let _0x42de7d = _0x13e139.medalProgress.findIndex(_0x550a7c => _0x550a7c.mid === _0x47e3cf.mid);
      _0x13e139.medalProgress.splice(_0x42de7d, 1, _0x47e3cf);
      this._vm.$gameLocalStorage.setItem("medalProgress", _0x13e139.medalProgress);
    }
  },
  modules: {
    petModule: _0x4c241b,
    playerModule: _0x203cca,
    missionModule: _0x2d22b2
  }
});
var _0x37994b = _0x3b2bba;
var _0x2a9daf = require(/*webcrack:missing*/"./56178.js");
function _0x4a8f02() {
  var _0xa9e9d6 = this;
  var _0x21cfff = _0xa9e9d6._self._c;
  return _0x21cfff("div", {
    staticClass: "game-window"
  }, [_0x21cfff("ul", {
    staticClass: "game-sidebar"
  }, _0xa9e9d6._l(_0xa9e9d6.sideConfig.list, function (_0x497e2f) {
    return _0x21cfff("li", {
      key: _0x497e2f.sort,
      class: _0x497e2f.klass,
      on: {
        click: function (_0x544076) {
          return _0xa9e9d6.sideClick(_0x497e2f);
        }
      }
    });
  }), 0), _0x21cfff("div", {
    staticClass: "game-map"
  }, [_0x21cfff("wild-advance", {
    class: [this.sideConfig.cur.name === "wildAdvance" ? "active" : null],
    attrs: {
      curSide: this.sideConfig.cur
    }
  }), _0x21cfff("central-town", {
    class: [this.sideConfig.cur.name === "centralTown" ? "active" : null],
    attrs: {
      curSide: this.sideConfig.cur
    }
  }), this.sideConfig.cur.name === "petDetail" ? [_0x21cfff("pet-detail")] : _0xa9e9d6._e(), this.sideConfig.cur.name === "playerInfo" ? [_0x21cfff("player-info")] : _0xa9e9d6._e()], 2), _0x21cfff("game-chat"), _0x21cfff("div", {
    staticClass: "game-announcement"
  }, [_0x21cfff("ul", {
    staticClass: "contact"
  }, [_0x21cfff("li", [_0x21cfff("span", [_0xa9e9d6._v("游戏交流群:")]), _0x21cfff("span", {
    staticClass: "contact__commuication"
  }, [_0xa9e9d6._v(_0xa9e9d6._s(_0xa9e9d6.WORKER_GROUP_NUMBER))])]), _0x21cfff("li", [_0x21cfff("span", [_0xa9e9d6._v("作者QQ:")]), _0x21cfff("span", {
    staticClass: "contact__author"
  }, [_0xa9e9d6._v(_0xa9e9d6._s(_0xa9e9d6.WORKER_ADMIN))])]), _0x21cfff("li", [_0x21cfff("marquee", {
    attrs: {
      scrollamount: "3"
    }
  }, [_0xa9e9d6._v(" 超可爱【免费单机】宠物养成RPG游戏-口袋精灵2 ")])], 1)])]), _0x21cfff("ul", {
    staticClass: "game-tools"
  }, _0xa9e9d6._l(_0xa9e9d6.toolsBtn, function (_0x146b75) {
    return _0x21cfff("li", {
      key: _0x146b75.name,
      class: _0x146b75.klass,
      on: {
        click: function (_0x4521dd) {
          return _0xa9e9d6.toolClick(_0x146b75);
        }
      }
    });
  }), 0), _0xa9e9d6.toolCur ? [_0x21cfff(_0xa9e9d6.hyphenate(_0xa9e9d6.toolCur.name), {
    tag: "component",
    on: {
      "tool-close": function (_0x20bfba) {
        _0xa9e9d6.toolCur = null;
      }
    }
  })] : _0xa9e9d6._e()], 2);
}
var _0x40d35d = [];
function _0x746f3c() {
  var _0x344956 = this;
  var _0x2a31a3 = _0x344956._self._c;
  return _0x2a31a3("div", {
    staticClass: "pet-detail"
  }, [_0x344956.equippedPet ? [_0x2a31a3("div", {
    staticClass: "detail-left"
  }, [_0x2a31a3("ul", {
    staticClass: "player-pet"
  }, [_0x2a31a3("li", [_0x344956._v(_0x344956._s(_0x344956.player.playerName))]), _0x2a31a3("li", [_0x344956._v(" 宝贝："), _0x2a31a3("span", {
    staticClass: "fight-pet-name"
  }, [_0x344956._v(_0x344956._s(_0x344956.equippedPet.name))])]), _0x2a31a3("li", [_0x344956._v(" 宠物数量："), _0x2a31a3("span", [_0x344956._v(_0x344956._s(_0x344956.petsNum))])])]), _0x2a31a3("div", {
    staticClass: "player-figure"
  }, [_0x2a31a3("img", {
    attrs: {
      src: require("./93632.js")("./" + _0x344956.player.figure + ".png")
    }
  })]), _0x2a31a3("div", {
    staticClass: "cur-pets"
  }, [_0x344956._l(_0x344956.curPets, function (_0x228b7f) {
    return _0x2a31a3("div", {
      key: _0x228b7f.id,
      class: ["cur-pets__item", _0x228b7f.id === _0x344956.equippedPet.id ? "active" : ""],
      on: {
        click: function (_0x1efb54) {
          return _0x344956.changeCurPet(_0x228b7f.id);
        },
        dblclick: function (_0x5189b1) {
          return _0x344956.handlePetDblClick(_0x228b7f.id);
        }
      }
    }, [_0x2a31a3("img", {
      attrs: {
        src: require("./63632.js")("./" + _0x228b7f.figure + ".gif")
      }
    }), _0x2a31a3("span", [_0x344956._v(_0x344956._s(_0x228b7f.name)), _0x2a31a3("br"), _0x344956._v(" LV " + _0x344956._s(_0x228b7f.level))]), _0x228b7f.id === _0x344956.fightPetId ? _0x2a31a3("div", {
      staticClass: "battle-pet"
    }, [_0x344956._v("战斗中")]) : _0x344956._e()]);
  }), _0x344956._l(_0x344956.curPetsPlaceHolder, function (_0x22d9c0) {
    return _0x2a31a3("div", {
      key: _0x22d9c0 + "placeholder",
      staticClass: "cur-pets__placeholder"
    }, [_0x2a31a3("div", [_0x2a31a3("img", {
      attrs: {
        src: require("./37046.js")
      }
    })])]);
  })], 2)]), _0x2a31a3("div", {
    staticClass: "detail-right"
  }, [_0x2a31a3("ul", {
    staticClass: "tabs"
  }, _0x344956._l(_0x344956.tabList, function (_0x5c6050) {
    return _0x2a31a3("li", {
      key: _0x5c6050.name,
      class: [_0x5c6050.klass, _0x5c6050.name === _0x344956.tabCur?.name ? "active" : ""],
      on: {
        click: function (_0x1b6c0f) {
          return _0x344956.tabClick(_0x5c6050);
        }
      }
    });
  }), 0), _0x344956.tabCur ? _0x2a31a3("div", {
    staticClass: "fight-pet"
  }, [_0x2a31a3(_0x344956.hyphenate(_0x344956.tabCur.name), {
    tag: "component",
    attrs: {
      equippedPet: _0x344956.equippedPet,
      petChange: _0x344956.petChange
    }
  })], 1) : _0x344956._e()])] : _0x344956._e()], 2);
}
var _0x31e3a8 = [];
function _0x51e06f() {
  var _0x4e7d9c = this;
  var _0x1b4e2c = _0x4e7d9c._self._c;
  return _0x1b4e2c("div", {
    staticClass: "pet-equipment"
  }, [_0x1b4e2c("prop-detail", {
    attrs: {
      prop: _0x4e7d9c.showProp,
      propDetailConfig: _0x4e7d9c.propDetailConfig
    }
  }), _0x1b4e2c("div", {
    staticClass: "equipment-left"
  }, [_0x4e7d9c.fightPetEquipments ? _0x4e7d9c._l(_0x4e7d9c.fightPetEquipments, function (_0x1858cc) {
    return _0x1b4e2c("div", {
      key: _0x1858cc.name,
      class: _0x1858cc.klass,
      on: {
        mouseenter: function (_0x4dbaf1) {
          return _0x4e7d9c.propMouseEnter(_0x1858cc);
        },
        mouseleave: _0x4e7d9c.propMouseLeave,
        dblclick: function (_0x3d2e98) {
          return _0x4e7d9c.handleDbClick(_0x1858cc);
        }
      }
    }, [_0x1b4e2c("div", {
      staticClass: "equipment__item--container"
    }, [_0x1b4e2c("img", {
      attrs: {
        src: require("./10427.js")("./" + _0x1858cc.type + "/" + _0x1858cc.img + ".gif")
      }
    })])]);
  }) : _0x4e7d9c._e(), _0x1b4e2c("div", {
    staticClass: "pet-static"
  }, [_0x1b4e2c("img", {
    attrs: {
      src: require("./36402.js")("./" + _0x4e7d9c.equippedPet.figure + ".gif")
    }
  })])], 2), _0x1b4e2c("div", {
    staticClass: "equipment-right"
  }, [_0x1b4e2c("span", [_0x4e7d9c._v("等级：" + _0x4e7d9c._s(_0x4e7d9c.equippedPet.level))]), _0x1b4e2c("span", [_0x4e7d9c._v("五行: " + _0x4e7d9c._s(_0x4e7d9c.equippedPet.attribute))]), _0x1b4e2c("span", [_0x4e7d9c._v("生命：" + _0x4e7d9c._s(_0x4e7d9c.equippedPet.maxHp))]), _0x1b4e2c("span", [_0x4e7d9c._v("魔法：" + _0x4e7d9c._s(_0x4e7d9c.equippedPet.maxMp))]), _0x1b4e2c("span", [_0x4e7d9c._v("攻击：" + _0x4e7d9c._s(_0x4e7d9c.equippedPet.atk))]), _0x1b4e2c("span", [_0x4e7d9c._v("防御：" + _0x4e7d9c._s(_0x4e7d9c.equippedPet.def))]), _0x1b4e2c("span", [_0x4e7d9c._v("速度：" + _0x4e7d9c._s(_0x4e7d9c.equippedPet.spd))]), _0x1b4e2c("span", [_0x4e7d9c._v("成长：" + _0x4e7d9c._s(_0x4e7d9c.equippedPet.growth))])])], 1);
}
var _0x1aefeb = [];
var _0x4ecef2 = {
  name: "PetEquipment",
  props: ["equippedPet"],
  data() {
    return {
      showProp: null,
      propDetailConfig: {
        left: 0,
        top: 0,
        visable: false
      }
    };
  },
  computed: {
    fightPetEquipments() {
      const _0x4d3aea = this.$store.state.playerModule.wornEquipments;
      const _0x3702b2 = _0x4d3aea.find(_0x4b002b => _0x4b002b.petId === this.equippedPet.id);
      if (_0x3702b2) {
        let _0x499aee = _0x4d9b0d(_0x3702b2.equipments);
        for (let _0x262145 in _0x499aee) {
          const _0x14c69b = _0x499aee[_0x262145];
          const _0x56fe0d = _0x14c69b.img.toString();
          const _0x2dfec6 = _0x56fe0d.charAt(_0x56fe0d.length - 1);
          _0x14c69b.klass = "equipment__item equipment__item--" + _0x2dfec6;
          if (["0", "1", "3", "4"].includes(_0x2dfec6)) {
            _0x14c69b.positionLeft = 80;
          } else if (["2", "8"].includes(_0x2dfec6)) {
            _0x14c69b.positionLeft = 216;
          } else {
            _0x14c69b.positionLeft = 120;
          }
        }
        const _0x27b61b = [];
        _0x499aee.map(_0x8675a4 => {
          const _0x5a84fc = _0x8675a4.description.filter(_0x1dd13a => _0x1dd13a[0] === "<");
          const _0x45276f = _0x8675a4.description.findIndex(_0xa9774b => _0xa9774b[0] === "<");
          let _0x507ce6;
          let _0x3447e9;
          for (let _0x2af3a9 = 0; _0x2af3a9 < _0x5a84fc.length; _0x2af3a9++) {
            _0x507ce6 = _0x5a84fc[_0x2af3a9].match(/[^<>]+(?=\s\(\d\/(\d+)\))/);
            if (_0x507ce6) {
              _0x3447e9 = _0x2af3a9 + _0x45276f;
              break;
            }
          }
          if (!_0x507ce6) {
            return;
          }
          const _0x433704 = _0x27b61b.find(_0x499bff => _0x499bff.name === _0x507ce6[0]);
          if (_0x433704) {
            _0x433704.equipments.push({
              idx: _0x3447e9,
              equipment: _0x8675a4
            });
          } else {
            const _0x205695 = {
              name: _0x507ce6[0],
              len: _0x507ce6[1],
              equipments: []
            };
            _0x205695.equipments.push({
              idx: _0x3447e9,
              equipment: _0x8675a4
            });
            _0x27b61b.push(_0x205695);
          }
        });
        for (let _0x5e3d28 of _0x27b61b) {
          for (let _0x88a6b3 = 0; _0x88a6b3 < _0x5e3d28.equipments.length; _0x88a6b3++) {
            const _0x489b84 = _0x5e3d28.equipments[_0x88a6b3];
            _0x489b84.equipment.description[_0x489b84.idx] = "<font color=\"#FED625\">" + _0x5e3d28.name + " (" + _0x5e3d28.equipments.length + "/" + _0x5e3d28.len + ")</font>";
            if (_0x5e3d28.equipments.length >= 2) {
              for (let _0x4e0b29 = 1; _0x4e0b29 < _0x5e3d28.equipments.length; _0x4e0b29++) {
                _0x489b84.equipment.description[_0x489b84.idx + _0x4e0b29] = _0x489b84.equipment.description[_0x489b84.idx + _0x4e0b29].replace("suit-effect", "suit-effect--active");
              }
            }
          }
        }
        return _0x499aee;
      }
      return null;
    }
  },
  methods: {
    propMouseEnter(_0x32f31c) {
      this.showProp = _0x32f31c;
      this.propDetailConfig = {
        left: this.showProp.positionLeft,
        top: 38,
        visable: true
      };
    },
    propMouseLeave() {
      this.showPorp = null;
      this.propDetailConfig = {
        left: 0,
        top: 0,
        visable: false
      };
    },
    handleDbClick(_0x48a621) {
      this.propMouseLeave();
      new SSPromise((_0x29ae66, _0x275ab2) => {
        this.$store.commit("playerModule/changeWornEquipments", {
          prop: _0x48a621,
          handle: "removeEquipment",
          resolve: _0x29ae66,
          reject: _0x275ab2
        });
      }).then(_0x39c84e => {
        this.$gameMessage.info(_0x39c84e.message);
      }).catch(_0x3d8ef1 => {
        this.$gameMessage.info(_0x3d8ef1.message);
      });
    }
  }
};
var _0x6fe31e = _0x4ecef2;
var _0x42123f = (0, _0x4f33e3.A)(_0x6fe31e, _0x51e06f, _0x1aefeb, false, null, null, null);
var _0xf9176c = _0x42123f.exports;
function _0x3f37f9() {
  var _0x568afe = this;
  var _0x486f6f = _0x568afe._self._c;
  return _0x486f6f("div", {
    staticClass: "pet-attribute"
  }, [_0x486f6f("div", {
    staticClass: "attribute-left"
  }, [_0x486f6f("div", {
    staticClass: "pet-static"
  }, [_0x486f6f("img", {
    attrs: {
      src: require("./36402.js")("./" + _0x568afe.equippedPet.figure + ".gif")
    }
  })])]), _0x486f6f("div", {
    staticClass: "attribute-right"
  }, [_0x486f6f("span", [_0x568afe._v("等级：" + _0x568afe._s(_0x568afe.equippedPet.level))]), _0x486f6f("span", [_0x568afe._v("阶数：" + _0x568afe._s(_0x568afe.equippedPet.rank))]), _0x486f6f("span", [_0x568afe._v("进化次数：" + _0x568afe._s(_0x568afe.equippedPet.evo))]), _0x486f6f("span", [_0x568afe._v("当前经验：" + _0x568afe._s(_0x568afe.equippedPet.exp))]), _0x486f6f("span", [_0x568afe._v("升级所需经验：" + _0x568afe._s(_0x568afe.equippedPet.maxExp))])])]);
}
var _0x4c5249 = [];
var _0xd7e2a5 = {
  name: "PetAttribute",
  props: ["equippedPet"]
};
var _0x2e2401 = _0xd7e2a5;
var _0x145b6f = (0, _0x4f33e3.A)(_0x2e2401, _0x3f37f9, _0x4c5249, false, null, null, null);
var _0x9a11cc = _0x145b6f.exports;
function _0x4faf00() {
  var _0x10ec0c = this;
  var _0x2d6b23 = _0x10ec0c._self._c;
  return _0x2d6b23("div", {
    staticClass: "pet-magic",
    on: {
      click: function (_0x5176a) {
        return _0x10ec0c.optionClick(null);
      }
    }
  }, [_0x2d6b23("magic-detail", {
    attrs: {
      magic: _0x10ec0c.showMagic,
      magicDetailConfig: _0x10ec0c.magicDetailConfig
    }
  }), _0x2d6b23("div", {
    staticClass: "magic-left"
  }, [_0x2d6b23("div", {
    staticClass: "pet-static"
  }, [_0x2d6b23("img", {
    attrs: {
      src: require("./36402.js")("./" + _0x10ec0c.equippedPet.figure + ".gif")
    }
  })])]), _0x2d6b23("div", {
    staticClass: "magic-right"
  }, [_0x10ec0c._l(_0x10ec0c.equippedPet.magic, function (_0x372cb5, _0x5def06) {
    return _0x2d6b23("div", {
      key: _0x372cb5.name,
      staticClass: "pet-magic__item"
    }, [_0x2d6b23("div", {
      staticClass: "pet-magic__description",
      on: {
        mouseenter: function (_0xbe75a3) {
          return _0x10ec0c.magicEnter(_0x372cb5, _0x5def06);
        },
        mouseleave: _0x10ec0c.magicLeave
      }
    }, [_0x2d6b23("span", [_0x10ec0c._v(_0x10ec0c._s(_0x372cb5.name))]), _0x2d6b23("span", [_0x10ec0c._v(_0x10ec0c._s(_0x372cb5.rank) + "级")])]), _0x372cb5.rank < 10 ? _0x2d6b23("button", {
      staticClass: "btn--upgrade",
      on: {
        click: function (_0x2b693b) {
          return _0x10ec0c.handleUpgrade(_0x372cb5);
        }
      }
    }, [_0x10ec0c._v(" 升级 ")]) : _0x10ec0c._e()]);
  }), _0x10ec0c.magicBookProps.length > 1 ? _0x2d6b23("div", {
    staticClass: "pet-magic__item"
  }, [_0x2d6b23("ul", {
    staticClass: "pet-magic__select"
  }, [_0x2d6b23("li", {
    staticClass: "pet-magic__book"
  }, [_0x2d6b23("span", {
    staticClass: "text--input",
    on: {
      click: function (_0x373667) {
        _0x373667.stopPropagation();
        return _0x10ec0c.optionClick(!_0x10ec0c.showOptions);
      }
    }
  }, [_0x10ec0c._v(_0x10ec0c._s(_0x10ec0c.magicBookSelected.option)), _0x2d6b23("img", {
    attrs: {
      src: require("./90126.js")
    }
  })]), _0x2d6b23("ul", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _0x10ec0c.showOptions,
      expression: "showOptions"
    }],
    staticClass: "book__options"
  }, _0x10ec0c._l(_0x10ec0c.magicBookProps, function (_0x47deaa) {
    return _0x2d6b23("li", {
      key: _0x47deaa.option,
      on: {
        click: function (_0x132050) {
          return _0x10ec0c.magicBookClick(_0x47deaa);
        }
      }
    }, [_0x10ec0c._v(" " + _0x10ec0c._s(_0x47deaa.option) + " ")]);
  }), 0)])]), _0x2d6b23("button", {
    staticClass: "btn--learn",
    on: {
      click: _0x10ec0c.magicLearn
    }
  }, [_0x10ec0c._v("学习")])]) : _0x10ec0c._e()], 2)], 1);
}
var _0x5ac58e = [];
var _0x48b5cb = {
  name: "PetMagic",
  props: ["petChange", "equippedPet"],
  data() {
    return {
      showOptions: false,
      magicBookSelected: null,
      showMagic: null,
      isMagicDetail: false,
      magicDetailTop: 0
    };
  },
  methods: {
    handleUpgrade(_0x479145) {
      if (this.throttle) {
        return;
      }
      this.throttle = true;
      const _0x5bb70f = this.$store.state.playerModule.packageDetail.packageProps;
      new SSPromise((_0x154ab6, _0x396cc3) => {
        const _0x16f481 = _0x5bb70f.find(_0x5f4df5 => _0x5f4df5.name === "技能升级卷轴");
        if (_0x16f481) {
          if (_0x479145.rank >= 10) {
            _0x396cc3({
              status: "fail",
              message: "该技能已经满级！"
            });
          } else {
            this.$propsFunc.useProp(_0x16f481, {
              component: "petMagic"
            }, _0x154ab6, _0x396cc3);
          }
        } else {
          _0x396cc3({
            status: "fail",
            message: "没有在背包中找到 技能升级卷轴 !"
          });
        }
      }).then(() => {
        this.$store.commit("petModule/improvePetMagic", {
          id: this.equippedPet.id,
          magicName: _0x479145.name
        });
        this.$gameMessage.info("宠物技能升级成功！");
      }).catch(_0x530e20 => {
        this.$gameMessage.info(_0x530e20.message);
      }).finally(() => {
        this.throttle = false;
      });
    },
    magicBookClick(_0x39b9eb) {
      this.magicBookSelected = _0x39b9eb;
    },
    optionClick(_0x20ed54) {
      this.showOptions = !!_0x20ed54;
    },
    magicLearn() {
      if (this.magicBookSelected.prop) {
        new SSPromise((_0xd6b34a, _0xf7ccd5) => {
          this.$propsFunc.useProp(this.magicBookSelected.prop, {
            component: "petMagic"
          }, _0xd6b34a, _0xf7ccd5);
        }).then(_0x2b02bd => {
          this.$gameMessage.info(_0x2b02bd.message);
        }).catch(_0x128447 => {
          this.$gameMessage.info(_0x128447.message);
        });
      } else {
        this.$gameMessage.info("请先选择一本可用的技能书！");
      }
    },
    magicEnter(_0x297220, _0x1e634b) {
      let _0x54d859 = "";
      if (_0x297220.recovery) {
        let _0x9e38f8 = (_0x297220.recovery.basic + _0x297220.recovery.rate * (_0x297220.rank - 1) + this.equipmentAttr.recovery) * 100;
        _0x54d859 = "技能效果：战斗中可恢复宠物自身" + _0x9e38f8.toFixed() + "%最大生命值的气血上限。";
      } else {
        const _0xe704f4 = (_0x297220.extra.basic + _0x297220.extra.rate * (_0x297220.rank - 1)) * 100;
        _0x54d859 = "技能效果：对敌人造成" + _0xe704f4.toFixed(0) + "%基础攻击力的伤害。";
        const _0xa7a325 = [{
          k: "bonus",
          v: "伤害加深"
        }, {
          k: "hpSteal",
          v: "生命偷取"
        }, {
          k: "mpSteal",
          v: "魔法偷取"
        }, {
          k: "offset",
          v: "伤害抵消"
        }];
        const _0x2692c4 = [];
        for (let _0x133710 of _0xa7a325) {
          if (_0x297220[_0x133710.k]) {
            const _0x446bb7 = (_0x297220[_0x133710.k].basic + _0x297220[_0x133710.k].rate * (_0x297220.rank - 1) + this.equipmentAttr[_0x133710.k]) * 100;
            _0x2692c4.push(_0x446bb7.toFixed() + "%" + _0x133710.v);
          }
        }
        if (_0x2692c4.length > 0) {
          _0x54d859 = _0x54d859.replace("。", "(技能附带" + _0x2692c4.join(",") + ")。");
        }
      }
      this.showMagic = [_0x54d859];
      if (_0x297220.manaCost) {
        this.showMagic.push("魔法消耗：当前等级 * " + _0x297220.manaCost.rate + " + " + _0x297220.manaCost.basic);
      }
      this.magicDetailTop = 62 + _0x1e634b * 24;
      this.isMagicDetail = true;
    },
    magicLeave() {
      this.showMagic = [];
      this.isMagicDetail = false;
    }
  },
  computed: {
    magicBookProps() {
      const _0x3f908a = this.$store.state.playerModule.packageDetail.packageProps;
      const _0x30968d = _0x3f908a.filter(_0x323c8d => _0x323c8d.type === "magicBook").map(_0x8c1aa6 => ({
        option: _0x8c1aa6.name,
        prop: _0x8c1aa6
      }));
      return [{
        option: "选择技能书",
        prop: null
      }, ..._0x30968d];
    },
    isPetChange() {
      return this.petChange;
    },
    magicDetailConfig() {
      return {
        left: 136,
        top: this.magicDetailTop,
        visable: this.isMagicDetail
      };
    },
    equipmentAttr() {
      const _0x24330a = {
        bonus: 0,
        hpSteal: 0,
        mpSteal: 0,
        offset: 0,
        recovery: 0
      };
      for (let _0x1d8f1f in _0x24330a) {
        _0x24330a[_0x1d8f1f] = this.equippedPet[_0x1d8f1f] || 0;
      }
      return _0x24330a;
    }
  },
  created() {
    this.magicBookSelected = this.magicBookProps[0];
  },
  watch: {
    isPetChange() {
      this.showOptions = false;
      this.magicBookSelected = this.magicBookProps[0];
    },
    magicBookProps(_0x38d3bb) {
      const _0x4b7bd6 = this.magicBookSelected;
      if (_0x4b7bd6.prop) {
        const _0x50fcb9 = _0x38d3bb.find(_0x2bdca6 => {
          if (_0x2bdca6.prop) {
            return _0x2bdca6.prop.name === _0x4b7bd6.prop.name;
          }
        });
        if (!_0x50fcb9) {
          this.magicBookSelected = {
            option: "选择技能书",
            prop: null
          };
        }
      }
    }
  }
};
var _0x5cec2a = _0x48b5cb;
var _0x42ff96 = (0, _0x4f33e3.A)(_0x5cec2a, _0x4faf00, _0x5ac58e, false, null, null, null);
var _0x56f07e = _0x42ff96.exports;
var _0x553ef7 = {
  name: "PetDetail",
  data() {
    return {
      tabList: [{
        name: "petEquipment",
        klass: "tab--equipment",
        sort: 0
      }, {
        name: "petAttribute",
        klass: "tab--attribute",
        sort: 1
      }, {
        name: "petMagic",
        klass: "tab--magic",
        sort: 2
      }],
      tabCur: null,
      petChange: false
    };
  },
  methods: {
    tabClick(_0xfb8be4) {
      if (_0xfb8be4.name !== this.tabCur.name) {
        this.tabCur = _0xfb8be4;
      }
    },
    changeCurPet(_0x53cafe) {
      if (_0x53cafe !== this.equippedPet.id) {
        this.petChange = !this.petChange;
        this.$store.commit("petModule/changeCurPetById", {
          id: _0x53cafe
        });
      }
    },
    handlePetDblClick(_0x54c46c) {
      const _0x40ec91 = this.$store.getters["petModule/showPet"](_0x54c46c);
      const _0x5b5d64 = ["name", "figure", "attribute", "rank", "level", "maxHp", "maxMp", "atk", "def", "spd", "growth", "id"];
      const _0x5cc517 = {};
      for (let _0x252871 of _0x5b5d64) {
        _0x5cc517[_0x252871] = _0x40ec91[_0x252871];
      }
    },
    hyphenate: _0x2bf3fb.Tg
  },
  created() {
    this.tabCur = this.tabList[0];
    this.$nextTick(() => {
      this.$store.commit("petModule/changeCurPetById", {
        handle: "INIT"
      });
    });
  },
  beforeDestroy() {
    this.$store.commit("petModule/changeCurPetById", {
      handle: "EXIT"
    });
  },
  computed: {
    petsNum() {
      return this.$store.getters["petModule/petsNum"];
    },
    curPets() {
      return this.$store.getters["petModule/curPets"];
    },
    curPetsPlaceHolder() {
      return 4 - this.curPets.length;
    },
    player() {
      return this.$store.state.playerModule;
    },
    equippedPet() {
      return this.$store.getters["playerModule/equippedPet"]("curPet");
    },
    fightPetId() {
      return this.$store.state.petModule.fightPetId;
    }
  },
  components: {
    petEquipment: _0xf9176c,
    petAttribute: _0x9a11cc,
    petMagic: _0x56f07e
  }
};
var _0x2d8ccc = _0x553ef7;
var _0x4c7415 = (0, _0x4f33e3.A)(_0x2d8ccc, _0x746f3c, _0x31e3a8, false, null, null, null);
var _0x16a243 = _0x4c7415.exports;
function _0x3412c8() {
  var _0x2f32af = this;
  var _0x261404 = _0x2f32af._self._c;
  return _0x261404("div", {
    staticClass: "player-info"
  }, [_0x261404("div", {
    staticClass: "player-show"
  }, [_0x261404("div", {
    staticClass: "player-show__name"
  }, [_0x261404("strong", [_0x2f32af._v("玩家昵称：" + _0x2f32af._s(_0x2f32af.player.playerName))])]), _0x261404("div", {
    staticClass: "player-show__figure"
  }, [_0x261404("img", {
    attrs: {
      src: require("./24547.js")("./" + _0x2f32af.player.figure + ".png")
    }
  })])]), _0x261404("div", {
    staticClass: "player-detail"
  }, [_0x261404("ul", {
    staticClass: "tabs"
  }, _0x2f32af._l(_0x2f32af.tabList, function (_0x1a3c41) {
    return _0x261404("li", {
      key: _0x1a3c41.name,
      class: _0x2f32af.tabClass(_0x1a3c41)
    });
  }), 0), _0x261404("ul", {
    staticClass: "context"
  }, _0x2f32af._l(_0x2f32af.playerInfo, function (_0x1ac385) {
    return _0x261404("li", {
      key: _0x1ac385.label
    }, [_0x261404("span", [_0x2f32af._v(_0x2f32af._s(_0x1ac385.label) + "：")]), _0x261404("span", [_0x2f32af._v(_0x2f32af._s(_0x1ac385.value))])]);
  }), 0), _0x261404("div", {
    staticClass: "danger-handlers"
  }, [_0x261404("div", {
    staticClass: "danger-handlers__tips"
  }, [_0x2f32af._v(" - - - - - - - 以下是危险操作，请仔细阅读提示信息后再进行确认 - - - - - - - - ")]), _0x261404("ul", {
    staticClass: "danger-handlers__btns"
  }, [_0x261404("li", [_0x261404("button", {
    staticClass: "btn--upload",
    on: {
      click: _0x2f32af.randomFigure
    }
  }, [_0x2f32af._v("随机人物")])]), _0x261404("li", [_0x261404("button", {
    staticClass: "btn--reset-all",
    on: {
      click: _0x2f32af.handleResetAll
    }
  }, [_0x2f32af._v(" 清除数据 ")])])])])])]);
}
var _0x2f5e44 = [];
var _0x400dac = {
  name: "PlayerInfo",
  data() {
    return {
      tabList: [{
        name: "playerAttribute",
        klass: "tab--attribute",
        sort: 0
      }],
      tabCur: null
    };
  },
  computed: {
    player() {
      return this.$store.state.playerModule;
    },
    playerInfo() {
      const {
        playerName: _0x172f6d,
        goldCoin: _0x5f1e7f,
        prestige: _0x46d134,
        crystal: _0x7647f2
      } = this.player;
      return [{
        label: "玩家昵称",
        value: _0x172f6d
      }, {
        label: "金币",
        value: _0x5f1e7f
      }, {
        label: "威望",
        value: _0x46d134
      }, {
        label: "水晶",
        value: _0x7647f2
      }];
    }
  },
  methods: {
    tabClass(_0x4fc1bf) {
      return [_0x4fc1bf.klass, _0x4fc1bf.name === this.tabCur.name ? "active" : ""];
    },
    handleResetAll() {
      const _0x2974fc = () => {
        this.$gameLocalStorage.clearAll();
        this.$gameMessage.info("清除完毕，正在刷新页面！");
        setTimeout(() => {
          window.location.reload();
        }, 500);
      };
      this.$gameAlert.openAlert("您是否要清除所有您所有的游戏数据（清除数据意味着整个游戏进度重新从零开始，您已有的宝宝、道具、任务进度等全部初始化）, 请再次确定！", {
        confirmHandle: _0x2974fc
      });
    },
    randomFigure() {
      const _0x44e4c1 = () => {
        const _0x122c5f = Math.floor(Math.random() * 6) + 1;
        const _0x416a00 = {
          playerName: _0x2e3e3c.iw,
          figure: _0x122c5f
        };
        this.$gameLocalStorage.setItem("playerDetail", _0x416a00);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      };
      this.$gameAlert.openAlert("您是否要生成其他随机人物形象替换当前人物形象？, 请再次确定！", {
        confirmHandle: _0x44e4c1
      });
    }
  },
  created() {
    this.tabCur = this.tabList[0];
  }
};
var _0x52cb38 = _0x400dac;
var _0x146f21 = (0, _0x4f33e3.A)(_0x52cb38, _0x3412c8, _0x2f5e44, false, null, null, null);
var _0x899a5f = _0x146f21.exports;
function _0x176571() {
  var _0x4a5abc = this;
  var _0x16cf97 = _0x4a5abc._self._c;
  return _0x16cf97("div", {
    staticClass: "tool-package"
  }, [_0x4a5abc.treasureSelectConfig ? _0x16cf97("div", {
    staticClass: "treasure-select"
  }, [_0x16cf97("div", {
    staticClass: "treasure-select__top"
  }), _0x16cf97("div", {
    staticClass: "treasure-select__center treasure-content"
  }, [_0x16cf97("div", {
    staticClass: "treasure-content__title"
  }, [_0x4a5abc._v(" 请从下述道具中点击选择一个你所需要的 ")]), _0x16cf97("ul", {
    staticClass: "treasure-content__props"
  }, _0x4a5abc._l(_0x4a5abc.treasureSelectConfig.gifts, function (_0x47f544) {
    return _0x16cf97("li", {
      key: _0x47f544.img,
      class: {
        active: _0x47f544.img === _0x4a5abc.treasureSelectConfig.gift?.img
      },
      on: {
        click: function (_0x5f4fe9) {
          return _0x4a5abc.handleTreasureClick("select", _0x47f544);
        }
      }
    }, [_0x16cf97("img", {
      attrs: {
        src: require("./10427.js")("./" + _0x47f544.type + "/" + _0x47f544.img + ".gif")
      }
    }), _0x16cf97("span", [_0x4a5abc._v(_0x4a5abc._s(_0x47f544.name))])]);
  }), 0), _0x16cf97("div", {
    staticClass: "treasure-content__btns"
  }, [_0x16cf97("button", {
    staticClass: "treasure-btn--confirm",
    on: {
      click: function (_0x44b087) {
        return _0x4a5abc.handleTreasureClick("confrim");
      }
    }
  }, [_0x4a5abc._v(" 确定 ")]), _0x16cf97("button", {
    staticClass: "treasure-btn--close",
    on: {
      click: function (_0x3a5e13) {
        return _0x4a5abc.handleTreasureClick("close");
      }
    }
  }, [_0x4a5abc._v(" 我再想想 ")])])]), _0x16cf97("div", {
    staticClass: "treasure-select__bottom"
  })]) : _0x4a5abc._e(), _0x16cf97("div", {
    staticClass: "btn--close",
    on: {
      click: function (_0x1611f5) {
        return _0x4a5abc.$emit("tool-close");
      }
    }
  }), _0x16cf97("div", {
    staticClass: "package-capacity"
  }, [_0x4a5abc._v(" 当前背包空间：" + _0x4a5abc._s(_0x4a5abc.packageDetail.packageProps.length) + "/" + _0x4a5abc._s(_0x4a5abc.packageDetail.maxCapacity) + " ")]), _0x16cf97("ul", {
    staticClass: "package-title"
  }, _0x4a5abc._l(_0x4a5abc.packageTitleConfig, function (_0x164797) {
    return _0x16cf97("li", {
      key: _0x164797.klass,
      class: _0x164797.klass
    }, [_0x4a5abc._v(" " + _0x4a5abc._s(_0x164797.name) + " ")]);
  }), 0), _0x16cf97("ul", {
    staticClass: "package-props"
  }, _0x4a5abc._l(_0x4a5abc.packageDetail.packageProps, function (_0x4aaadc) {
    return _0x16cf97("li", {
      key: _0x4aaadc.rand,
      class: [_0x4a5abc.curProp === _0x4aaadc ? "active" : ""],
      on: {
        click: function (_0x646637) {
          return _0x4a5abc.propClick(_0x4aaadc);
        },
        mouseenter: function (_0x5d7dce) {
          return _0x4a5abc.propMouseEnter(_0x4aaadc);
        },
        mouseleave: _0x4a5abc.propMouseLeave
      }
    }, [_0x16cf97("div", {
      staticClass: "package-props__name",
      on: {
        dblclick: function (_0x110683) {
          return _0x4a5abc.handleDblClick(_0x4aaadc);
        }
      }
    }, [_0x16cf97("img", {
      attrs: {
        src: require("./37702.js")("./" + _0x4aaadc.type + ".gif")
      }
    }), _0x4a5abc._v(_0x4a5abc._s(_0x4aaadc.name) + " ")]), _0x16cf97("div", {
      staticClass: "package-props__type"
    }, [_0x4a5abc._v(_0x4a5abc._s(_0x4a5abc._f("formatPropType")(_0x4aaadc.type)))]), _0x16cf97("div", {
      staticClass: "package-props__num"
    }, [_0x4a5abc._v(_0x4a5abc._s(_0x4aaadc.num))])]);
  }), 0), _0x16cf97("ul", {
    staticClass: "package-handle"
  }, _0x4a5abc._l(_0x4a5abc.packageHandleConfig, function (_0x2b2359) {
    return _0x16cf97("li", {
      key: _0x2b2359.name,
      class: _0x2b2359.klass
    }, [_0x16cf97("button", {
      on: {
        click: function (_0x1d1ffe) {
          return _0x4a5abc.handleClick(_0x2b2359);
        }
      }
    }, [_0x4a5abc._v(_0x4a5abc._s(_0x2b2359.zhName))])]);
  }), 0), _0x16cf97("prop-detail", {
    attrs: {
      prop: _0x4a5abc.showProp,
      propDetailConfig: {
        left: 376,
        top: 80,
        visable: _0x4a5abc.isPropDetail
      }
    }
  })], 1);
}
var _0x3bef43 = [];
var _0x3ef302 = {
  name: "ToolPackage",
  data() {
    return {
      curProp: null,
      isPropDetail: false,
      showProp: null,
      isHandle: false,
      treasureSelectConfig: null
    };
  },
  computed: {
    packageTitleConfig() {
      return [{
        name: "物品名称",
        klass: "package-title__name"
      }, {
        name: "类型",
        klass: "package-title__type"
      }, {
        name: "数量",
        klass: "package-title__num"
      }];
    },
    packageDetail() {
      return this.$store.state.playerModule.packageDetail;
    },
    packageHandleConfig() {
      return [{
        name: "useProp",
        zhName: "使用",
        klass: "package-handle__use",
        sort: 0
      }, {
        name: "moveToStore",
        zhName: "放入仓库",
        klass: "package-handle__toStore",
        sort: 1
      }, {
        name: "deleteProp",
        zhName: "丢弃",
        klass: "package-handle__discard",
        sort: 2
      }, {
        name: "sortPackage",
        zhName: "整理背包",
        klass: "package-handle__sort",
        sort: 3
      }];
    }
  },
  methods: {
    handleClick(_0x49895b) {
      if (this.isHandle) {
        return;
      }
      this.isHandle = true;
      const _0x40df8b = () => {
        this.isHandle = false;
      };
      if (_0x49895b.name === "deleteProp") {
        if (!this.curProp) {
          this.$gameMessage.info("请先选择您要丢弃的道具！");
          _0x40df8b();
          return;
        }
        if (this.curProp.type === "special") {
          this.$gameMessage.info(this.curProp.name + "不可丢弃！");
          _0x40df8b();
          return;
        }
        const _0x3e498b = "丢弃道具 " + this.curProp?.name + " 后不能恢复，请确认是否要丢弃！";
        if (this.curProp) {
          this.$gameAlert.openAlert(_0x3e498b, {
            defaultHandle: _0x40df8b,
            confirmHandle: () => {
              new SSPromise((_0x3d14a6, _0x21aadd) => {
                this.$store.commit("playerModule/changePackageProps", {
                  handle: "delete",
                  props: [this.curProp],
                  resolve: _0x3d14a6,
                  reject: _0x21aadd
                });
              }).then(_0x17b62b => {
                this.$gameMessage.info(_0x17b62b.message);
              });
            }
          });
        }
      }
      if (_0x49895b.name === "sortPackage") {
        new SSPromise((_0x30fa81, _0x57fe18) => {
          this.$store.commit("playerModule/sortPlayerProps", {
            handle: "package",
            resolve: _0x30fa81,
            reject: _0x57fe18
          });
        }).then(_0x5498d0 => {
          document.querySelector(".package-props").scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
          this.$gameMessage.info(_0x5498d0.message);
          this.curProp = null;
          _0x40df8b();
        });
      }
      if (_0x49895b.name === "moveToStore") {
        new SSPromise((_0x645e2f, _0x3d76f8) => this.curProp && this.packageDetail.packageProps.find(_0x5d6767 => _0x5d6767.name === this.curProp.name) ? void this.$store.commit("playerModule/moveProp", {
          props: [this.curProp],
          handle: "moveToStore",
          resolve: _0x645e2f,
          reject: _0x3d76f8
        }) : (this.$gameMessage.info("请先选择您要存入仓库的道具！"), void _0x40df8b())).then(_0x197cd6 => {
          this.$gameMessage.info(_0x197cd6.message);
        }).catch(_0xdaf074 => {
          this.$gameMessage.info(_0xdaf074.message);
        }).finally(() => {
          this.curProp = null;
          _0x40df8b();
        });
      }
      if (_0x49895b.name === "useProp") {
        if (!this.curProp) {
          this.$gameMessage.info("使用失败：请先选择您要使用的道具！");
          _0x40df8b();
          return;
        }
        new SSPromise((_0x307bda, _0x597696) => {
          this.$propsFunc.useProp(this.curProp, {
            component: "toolPackage"
          }, _0x307bda, _0x597696);
        }).then(_0x2e18fe => {
          if (_0x2e18fe.status !== "treasureSelect") {
            this.$gameMessage.info(_0x2e18fe.message);
          } else {
            this.treasureSelectConfig = _0x2e18fe.data;
          }
        }).catch(_0x4ddf50 => {
          if (_0x4ddf50.status === "insufficient" || _0x4ddf50.status === "absent") {
            this.curProp = null;
          }
          this.$gameMessage.info(_0x4ddf50.message);
        }).finally(() => {
          _0x40df8b();
        });
      }
    },
    propClick(_0x210f4c) {
      this.curProp = this.curProp === _0x210f4c ? null : _0x210f4c;
    },
    propMouseEnter(_0x464ba6) {
      this.showProp = _0x464ba6;
      this.isPropDetail = true;
    },
    propMouseLeave() {
      this.showPorp = null;
      this.isPropDetail = false;
    },
    handleDblClick(_0x1dc3a3) {
      const _0x546410 = _0x4d9b0d(_0x1dc3a3);
      delete _0x546410.num;
      delete _0x546410.price;
    },
    handleTreasureClick(_0x2856b9, _0x2dcc23) {
      switch (_0x2856b9) {
        case "close":
          this.treasureSelectConfig = null;
          break;
        case "select":
          this.treasureSelectConfig.gift = _0x2dcc23.img === this.treasureSelectConfig.gift?.img ? null : _0x2dcc23;
          break;
        case "confrim":
          if (this.treasureSelectConfig.gift) {
            const {
              treasure: _0x5cf096,
              gift: _0x3fa706
            } = this.treasureSelectConfig;
            new SSPromise((_0x49a7ca, _0x509a41) => {
              this.$store.commit("playerModule/changePackageProps", {
                handle: "reduce",
                props: [_0x5cf096],
                num: 1,
                resolve: _0x49a7ca,
                reject: _0x509a41
              });
            }).then(() => {
              this.$store.commit("playerModule/changePackageProps", {
                handle: "add",
                props: [_0x3fa706],
                resolve: _0x2bf3fb.lQ,
                reject: _0x2bf3fb.lQ
              });
              this.$gameMessage.info("获得道具：" + _0x3fa706.name + " " + _0x3fa706.num + "个");
              const _0xe2d59b = {
                treasure: _0x5cf096.name,
                props: [{
                  name: _0x3fa706.name,
                  num: _0x3fa706.num,
                  level: _0x3fa706.level
                }]
              };
            }).catch(_0x5cc1e1 => {
              this.$gameMessage.info(_0x5cc1e1.message);
            }).finally(() => {
              this.treasureSelectConfig = null;
            });
          }
          break;
        default:
          this.treasureSelectConfig = null;
      }
    }
  },
  beforeDestroy() {
    this.$gameAlert.closeAlert();
  }
};
var _0x4346d9 = _0x3ef302;
var _0x5568f6 = (0, _0x4f33e3.A)(_0x4346d9, _0x176571, _0x3bef43, false, null, null, null);
var _0x36ff02 = _0x5568f6.exports;
function _0x2087c6() {
  var _0x221ff8 = this;
  var _0x2e7197 = _0x221ff8._self._c;
  return _0x2e7197("div", {
    staticClass: "tool-message"
  }, [_0x2e7197("div", {
    staticClass: "btn--close",
    on: {
      click: function (_0x5cc915) {
        return _0x221ff8.$emit("tool-close");
      }
    }
  }), _0x221ff8._m(0)]);
}
var _0x1af2c3 = [function () {
  var _0x457ce4 = this;
  var _0x330ac8 = _0x457ce4._self._c;
  return _0x330ac8("div", {
    staticClass: "message-list"
  }, [_0x330ac8("div", [_0x457ce4._v(" 宠物图鉴(查询获取途径，技能效果等宠物信息)："), _0x330ac8("br"), _0x330ac8("a", {
    attrs: {
      href: "http://127.0.0.1:12000/atlas/",
      target: "_blank"
    }
  }, [_0x457ce4._v("http://127.0.0.1:12000/atlas")])]), _0x330ac8("div", [_0x457ce4._v(" 游戏指南(查询玩法，副本掉落等游戏信息)："), _0x330ac8("br"), _0x330ac8("a", {
    attrs: {
      href: "http://127.0.0.1:12000/docs/",
      target: "_blank"
    }
  }, [_0x457ce4._v("http://127.0.0.1:12000/docs")])]), _0x330ac8("div", [_0x457ce4._v(" 游戏交流群(寻求帮助，提出意见，交流心得)："), _0x330ac8("br"), _0x330ac8("a", {
    attrs: {
      href: "https://qm.qq.com/cgi-bin/qm/qr?k=6hvwe81JW7hmmiNy-NDzKkhlF3us6UdT&jump_from=webapi&authKey=AdtWrXUdv8SxTuSPJip6MbFAv1/KHHLVV3QnkX8EOuSnoOxRWYvDrSQ0wFsCOaPY",
      target: "_blank"
    }
  }, [_0x457ce4._v("qq群：873334630")])])]);
}];
var _0xcae85f = {
  name: "ToolMessage"
};
var _0x812d75 = _0xcae85f;
var _0x161fb6 = (0, _0x4f33e3.A)(_0x812d75, _0x2087c6, _0x1af2c3, false, null, null, null);
var _0x5a67ac = _0x161fb6.exports;
function _0xc65bae() {
  var _0xcf1ed5 = this;
  _0xcf1ed5._self._c;
  return _0xcf1ed5._m(0);
}
var _0x25cf42 = [function () {
  var _0x5b11cb = this;
  var _0x4daf17 = _0x5b11cb._self._c;
  return _0x4daf17("div", {
    staticClass: "game-chat"
  }, [_0x4daf17("ul", {
    staticClass: "chat-list"
  }, [_0x4daf17("li")])]);
}];
var _0x4feaad = {
  name: "GameChat"
};
var _0x55e99a = _0x4feaad;
var _0x4ffba6 = (0, _0x4f33e3.A)(_0x55e99a, _0xc65bae, _0x25cf42, false, null, null, null);
var _0x5c6f72 = _0x4ffba6.exports;
var _0x56bfbb = {
  name: "GameWindow",
  data() {
    return {
      sideConfig: _0x46ea4c.uU,
      toolsBtn: _0x46ea4c.SC,
      toolCur: null,
      WORKER_GROUP_NUMBER: _0x2e3e3c.jf,
      WORKER_ADMIN: _0x2e3e3c.t$
    };
  },
  methods: {
    sideClick(_0x43abac) {
      this.$gameAlert.resetAlert();
      if (_0x43abac.name !== this.sideConfig.cur.name) {
        this.sideConfig.cur = _0x43abac;
      } else {
        this.sideConfig.cur = {
          name: "refresh"
        };
        this.$nextTick(() => {
          this.sideConfig.cur = _0x43abac;
        });
      }
    },
    toolClick(_0x5a35e0) {
      this.toolCur = _0x5a35e0.name === this.toolCur?.name ? null : _0x5a35e0;
    },
    hyphenate: _0x2bf3fb.Tg
  },
  components: {
    centralTown: () => require.e(51).then(require.bind(require, 91051)),
    wildAdvance: () => require.e(477).then(require.bind(require, 97477)),
    petDetail: _0x16a243,
    playerInfo: _0x899a5f,
    toolPackage: _0x36ff02,
    toolMessage: _0x5a67ac,
    toolMission: () => require.e(54).then(require.bind(require, 87054)),
    gameChat: _0x5c6f72
  },
  created() {
    function _0x5b5680() {
      const _0x46009 = {
        goldCoin: 0,
        prestige: 0,
        crystal: 0
      };
      const _0x55d307 = {
        maxCapacity: 60,
        packageProps: []
      };
      const _0x2bd13e = {
        maxCapacity: 60,
        storeProps: []
      };
      const _0x3938d = this.$gameLocalStorage.getItem("wornEquipments") || [];
      const _0x310f42 = this.$gameLocalStorage.getItem("playerDetail");
      const _0x130bf3 = this.$gameLocalStorage.getItem("playerAsset") || _0x46009;
      const _0x117c50 = this.$gameLocalStorage.getItem("packageDetail") || _0x55d307;
      const _0x22ebb9 = this.$gameLocalStorage.getItem("storeDetail") || _0x2bd13e;
      this.$gameLocalStorage.setItem("packageDetail", _0x117c50);
      this.$gameLocalStorage.setItem("storeDetail", _0x22ebb9);
      this.$store.commit("playerModule/initPlayerDetail", _0x310f42);
      this.$gameLocalStorage.removeItem("playerDetail");
      this.$store.commit("playerModule/initPlayerAsset", {
        packageDetail: _0x117c50,
        storeDetail: _0x22ebb9,
        ..._0x130bf3
      });
      this.$store.commit("playerModule/initWornEquipments", {
        wornEquipments: _0x3938d
      });
    }
    function _0x19b89f() {
      const _0x4acd75 = this.$petFunc.createDefaultPets();
      const _0x21f027 = _0x4acd75[(0, _0x2bf3fb.bd)(0, 4)].id;
      const _0x12e5f8 = [_0x21f027];
      const _0x560583 = 60;
      const _0x46da86 = this.$gameLocalStorage.getItem("totalPets") || _0x4acd75;
      const _0x588727 = this.$gameLocalStorage.getItem("curPetsId") || _0x12e5f8;
      const _0x596032 = this.$gameLocalStorage.getItem("pastureMaxCapacity") || _0x560583;
      this.$gameLocalStorage.setItem("totalPets", _0x46da86);
      this.$gameLocalStorage.setItem("curPetsId", _0x588727);
      this.$gameLocalStorage.setItem("pastureMaxCapacity", _0x596032);
      this.$store.commit("petModule/initPets", {
        totalPets: _0x46da86,
        curPetsId: _0x588727,
        pastureMaxCapacity: _0x596032
      });
    }
    function _0x28027a() {
      const _0x3ae7e8 = this.$gameLocalStorage.getItem("acceptedMissions") || [];
      const _0x5b1291 = this.$gameLocalStorage.getItem("finishedMissions") || [];
      this.$store.commit("missionModule/initMissions", {
        acceptedMissions: _0x3ae7e8,
        finishedMissions: _0x5b1291
      });
    }
    function _0x435158() {
      const _0x196684 = this.$gameLocalStorage.getItem("dungeonsDetail") || _0x46ea4c._q;
      this.$gameLocalStorage.setItem("dungeonsDetail", _0x196684);
      this.$store.commit("initDungeonsDetail", _0x196684);
    }
    function _0x130636() {
      const _0x46e942 = this.$gameLocalStorage.getItem("medalProgress") || _0x46ea4c.ap;
      this.$store.commit("initMedalProgress", _0x46e942);
    }
    this.sideConfig.cur = this.sideConfig.list.find(_0x58503f => _0x58503f.name === "centralTown");
    _0x5b5680.call(this);
    _0x19b89f.call(this);
    _0x28027a.call(this);
    _0x435158.call(this);
    _0x130636.call(this);
    this.$nextTick(() => {
      const _0x308452 = this.$store;
      let _0xc84de0 = false;
      let _0x2400cf = false;
      _0x308452.watch((_0x458d66, _0x1fc1c5) => _0x1fc1c5["petModule/fightPet"]?.exp, () => {
        if (!_0xc84de0) {
          _0xc84de0 = true;
          if (_0x308452.state.petModule.fightPetId) {
            this.$petFunc.petExpUpgrade("fightPet");
            this.$gameLocalStorage.setItem("totalPets", _0x308452.state.petModule.totalPets);
            this.$nextTick(() => {
              _0xc84de0 = false;
            });
          } else {
            _0xc84de0 = false;
          }
        }
      });
      _0x308452.watch((_0x281c61, _0x235a1a) => _0x235a1a["petModule/curPet"]?.exp, () => {
        if (!_0x2400cf) {
          _0x2400cf = true;
          if (_0x308452.state.petModule.curPetId) {
            this.$petFunc.petExpUpgrade("curPet");
            this.$gameLocalStorage.setItem("totalPets", _0x308452.state.petModule.totalPets);
            this.$nextTick(() => {
              _0x2400cf = false;
            });
          } else {
            _0x2400cf = false;
          }
        }
      });
      _0x308452.watch((_0x48d1cd, _0x169fd5) => _0x169fd5["petModule/curPet"]?.magic, () => {
        this.$gameLocalStorage.setItem("totalPets", _0x308452.state.petModule.totalPets);
      });
      _0x308452.watch(_0x1ca7ea => _0x1ca7ea.petModule.totalPets, () => {
        this.$gameLocalStorage.setItem("totalPets", _0x308452.state.petModule.totalPets);
      });
      _0x308452.watch(_0x5d88a0 => _0x5d88a0.petModule.pastureMaxCapacity, () => {
        this.$gameLocalStorage.setItem("pastureMaxCapacity", _0x308452.state.petModule.pastureMaxCapacity);
      });
      _0x308452.watch(_0x34d45b => _0x34d45b.petModule.curPetsId, () => {
        this.$gameLocalStorage.setItem("curPetsId", _0x308452.state.petModule.curPetsId);
      });
      _0x308452.watch(_0x476f00 => _0x476f00.playerModule.goldCoin, () => {
        const {
          goldCoin: _0x42d0cd,
          prestige: _0x5ef035,
          crystal: _0x442003
        } = _0x308452.state.playerModule;
        const _0x4216d1 = {
          goldCoin: _0x42d0cd,
          prestige: _0x5ef035,
          crystal: _0x442003
        };
        this.$gameLocalStorage.setItem("playerAsset", _0x4216d1);
      });
      _0x308452.watch(_0x38de3b => _0x38de3b.playerModule.prestige, () => {
        const {
          goldCoin: _0x2cef32,
          prestige: _0x514abc,
          crystal: _0x555500
        } = _0x308452.state.playerModule;
        const _0x444d95 = {
          goldCoin: _0x2cef32,
          prestige: _0x514abc,
          crystal: _0x555500
        };
        this.$gameLocalStorage.setItem("playerAsset", _0x444d95);
      });
      _0x308452.watch(_0x1d91b7 => _0x1d91b7.playerModule.crystal, () => {
        const {
          goldCoin: _0x262df7,
          prestige: _0x37be66,
          crystal: _0x41e2a9
        } = _0x308452.state.playerModule;
        const _0xff1e8b = {
          goldCoin: _0x262df7,
          prestige: _0x37be66,
          crystal: _0x41e2a9
        };
        this.$gameLocalStorage.setItem("playerAsset", _0xff1e8b);
      });
      _0x308452.watch(_0x1ee24f => _0x1ee24f.playerModule.packageDetail.packageProps, () => {
        const _0x3799a6 = _0x308452.state.playerModule.packageDetail;
        this.$gameLocalStorage.setItem("packageDetail", _0x3799a6);
      });
      _0x308452.watch(_0x190c68 => _0x190c68.playerModule.packageDetail.maxCapacity, () => {
        const _0x55a139 = _0x308452.state.playerModule.packageDetail;
        this.$gameLocalStorage.setItem("packageDetail", _0x55a139);
      });
      _0x308452.watch(_0x6bfea7 => _0x6bfea7.playerModule.storeDetail.storeProps, () => {
        const _0xc15d58 = _0x308452.state.playerModule.storeDetail;
        this.$gameLocalStorage.setItem("storeDetail", _0xc15d58);
      });
      _0x308452.watch(_0x2873bc => _0x2873bc.playerModule.storeDetail.maxCapacity, () => {
        const _0x79423a = _0x308452.state.playerModule.storeDetail;
        this.$gameLocalStorage.setItem("storeDetail", _0x79423a);
      });
      _0x308452.watch(_0x4ea118 => _0x4ea118.playerModule.wornEquipments, () => {
        const _0x228eff = _0x308452.state.playerModule.wornEquipments;
        this.$gameLocalStorage.setItem("wornEquipments", _0x228eff);
      });
    });
  },
  mounted() {
    this.$resizePage();
  }
};
var _0x576653 = _0x56bfbb;
var _0x3a1968 = (0, _0x4f33e3.A)(_0x576653, _0x4a8f02, _0x40d35d, false, null, null, null);
var _0xd184d4 = _0x3a1968.exports;
_0x5df579.Ay.use(_0x2a9daf.Ay);
const _0x3be59e = [{
  path: "/",
  component: _0xd184d4
}, {
  path: "/:pathMatch(.*)*",
  redirect: "/"
}];
const _0x7c5c32 = new _0x2a9daf.Ay({
  mode: "history",
  routes: _0x3be59e
});
_0x7c5c32.beforeEach((_0x2e47f0, _0x51340d, _0x306f99) => {
  const _0x567303 = _0x5df579.Ay.$gameLocalStorage.getItem("playerDetail");
  if (_0x567303) {
    return _0x306f99();
  }
  {
    const _0x47118c = Math.floor(Math.random() * 6) + 1;
    const _0x41af65 = {
      playerName: _0x2e3e3c.iw,
      figure: _0x47118c
    };
    _0x5df579.Ay.$gameLocalStorage.setItem("playerDetail", _0x41af65);
    _0x306f99();
  }
});
var _0x4e4ad8 = _0x7c5c32;
function _0x35c648() {
  var _0x4c3bfd = this;
  var _0x293f15 = _0x4c3bfd._self._c;
  if (_0x4c3bfd.message) {
    return _0x293f15("div", {
      staticClass: "game-message"
    }, [_0x293f15("div", [_0x4c3bfd._v(_0x4c3bfd._s(_0x4c3bfd.message))])]);
  } else {
    return _0x4c3bfd._e();
  }
}
var _0x5b41e0 = [];
var _0x7438df = {
  name: "GameMessage",
  data() {
    return {
      timer: null,
      message: null
    };
  },
  methods: {
    info(_0x139ffb, _0x32d094 = 2000) {
      this.clearMessage();
      this.message = _0x139ffb;
      this.$nextTick(() => {
        this.appendMessageToParent();
        this.timer = setTimeout(() => {
          clearTimeout(this.timer);
          const _0x38b60f = document.querySelector(".game-window");
          if (_0x38b60f) {
            _0x38b60f.removeChild(this.$el);
          }
        }, _0x32d094);
      });
    },
    clearMessage() {
      clearTimeout(this.timer);
      const _0x17891e = document.querySelector(".game-window");
      if (_0x17891e) {
        if (this.message && _0x17891e.contains(this.$el)) {
          _0x17891e.removeChild(this.$el);
        }
        this.message = null;
      }
    },
    appendMessageToParent() {
      const _0x4958fe = document.querySelector(".game-window");
      if (_0x4958fe) {
        _0x4958fe.appendChild(this.$el);
      }
    }
  }
};
var _0x325333 = _0x7438df;
var _0x12c6aa = (0, _0x4f33e3.A)(_0x325333, _0x35c648, _0x5b41e0, false, null, null, null);
var _0xa55c89 = _0x12c6aa.exports;
function _0x4c2a71() {
  var _0x2a1c04 = this;
  var _0x352d75 = _0x2a1c04._self._c;
  if (_0x2a1c04.message) {
    return _0x352d75("div", {
      staticClass: "game-alert"
    }, [_0x352d75("div", {
      staticClass: "game-alert-dialog"
    }, [_0x352d75("div", {
      staticClass: "game-alert-dialog__top"
    }), _0x352d75("div", {
      staticClass: "game-alert-dialog__bottom"
    }), _0x352d75("div", {
      staticClass: "game-alert-dialog__message"
    }, [_0x2a1c04._v(" " + _0x2a1c04._s(_0x2a1c04.message) + " ")]), _0x352d75("div", {
      class: ["game-alert-dialog__handle", {
        hidden: !_0x2a1c04.isHandle
      }]
    }, [_0x352d75("button", {
      staticClass: "btn--confirm",
      on: {
        click: _0x2a1c04.confirmAlert
      }
    }, [_0x2a1c04._v("确定")]), _0x352d75("button", {
      on: {
        click: _0x2a1c04.closeAlert
      }
    }, [_0x2a1c04._v("取消")])])])]);
  } else {
    return _0x2a1c04._e();
  }
}
var _0x33bf0f = [];
var _0x5aa108 = {
  name: "GameAlert",
  data() {
    return {
      message: null,
      cb: null,
      isHandle: true
    };
  },
  methods: {
    openAlert(_0x5a8b0c, _0xc15b05) {
      this.resetAlert();
      if (_0xc15b05) {
        this.cb = _0xc15b05;
        this.isHandle = true;
      } else {
        this.isHandle = false;
      }
      this.message = _0x5a8b0c;
      this.$nextTick(() => {
        this.appendMessageToParent();
      });
    },
    resetAlert() {
      const _0x560368 = document.querySelector(".game-window");
      if (_0x560368 && _0x560368.contains(this.$el)) {
        if (this.message && _0x560368.contains(this.$el)) {
          _0x560368.removeChild(this.$el);
        }
        this.message = null;
        this.cb = null;
      }
    },
    closeAlert() {
      const _0x27093a = document.querySelector(".game-window");
      if (_0x27093a && _0x27093a.contains(this.$el)) {
        if (this.cb?.cancelHandle) {
          this.cb.cancelHandle();
        }
        if (this.cb?.defaultHandle) {
          this.cb.defaultHandle();
        }
        this.resetAlert();
      }
    },
    appendMessageToParent() {
      const _0x59b372 = document.querySelector(".game-window");
      if (_0x59b372) {
        _0x59b372.appendChild(this.$el);
      }
    },
    confirmAlert() {
      if (this.cb) {
        if (this.cb?.confirmHandle) {
          this.cb.confirmHandle();
        }
        if (this.cb?.defaultHandle) {
          this.cb.defaultHandle();
        }
        this.resetAlert();
      }
    }
  }
};
var _0x4e15fb = _0x5aa108;
var _0x54b90a = (0, _0x4f33e3.A)(_0x4e15fb, _0x4c2a71, _0x33bf0f, false, null, null, null);
var _0x2998a4 = _0x54b90a.exports;
var _0x447e7d = require(/*webcrack:missing*/"./83169.js");
var _0x150a34 = _0x447e7d;
var _0x491261 = require(/*webcrack:missing*/"./1576.js");
var _0x10faf6 = _0x491261;
require(/*webcrack:missing*/"./44514.js");
var _0x355cfb = require(/*webcrack:missing*/"./97954.js");
var _0x8a7309 = _0x355cfb;
var _0x250683 = require(/*webcrack:missing*/"./27955.js");
var _0xcb8a20 = _0x250683;
function _0x4790be(_0xbc9426) {
  _0xbc9426.prototype.dayjs = _0x10faf6;
}
function _0x321ed6(_0x3a0f70) {
  const _0x3121ed = new _0x3a0f70(_0xa55c89).$mount();
  _0x3a0f70.prototype.$gameMessage = _0x3121ed;
}
function _0x10d8b4(_0x1c0861) {
  const _0x4c59cc = new _0x1c0861(_0x2998a4).$mount();
  _0x1c0861.prototype.$gameAlert = _0x4c59cc;
}
function _0xfd3ceb(_0x4d3319) {
  const _0xcde947 = function (_0xa6ab74) {
    if (_0xa6ab74) {
      return _0x150a34.SHA256(_0xa6ab74).toString();
    } else {
      return null;
    }
  };
  _0x4d3319.prototype.$encrypt = Object.create(null);
  _0x4d3319.prototype.$encrypt.SHA256 = _0xcde947;
}
function _0x4a96b3(_0x4f69a7) {
  let _0x326d05 = false;
  function _0x4d926a() {
    const _0x3d415a = window.innerWidth;
    const _0x136947 = window.innerHeight;
    let _0x508048 = document.querySelector(".game-window");
    if (!_0x508048) {
      const _0x40aea5 = document.querySelector(".game-login");
      const _0x445d91 = document.querySelector(".game-signup");
      _0x508048 = _0x40aea5 || _0x445d91;
    }
    let _0x3af30b = 1;
    if (!(_0x3d415a >= 1000) || !(_0x136947 >= 608)) {
      if (_0x3d415a >= 608 && _0x136947 >= 1000) {
        _0x508048.style.transform = "translate(-50%, -50%) rotate(90deg)";
      }
      if (_0x3d415a >= _0x136947) {
        _0x3af30b = _0x136947 >= 608 ? _0x3d415a / 1000 : _0x3d415a / 1000 >= _0x136947 / 608 ? _0x136947 / 608 : _0x3d415a / 1000;
        _0x508048.style.transform = "translate(-50%, -50%) scale(" + _0x3af30b + ")";
      } else {
        _0x3af30b = _0x3d415a >= 608 ? _0x136947 / 1000 : _0x136947 / 1000 >= _0x3d415a / 608 ? _0x3d415a / 608 : _0x136947 / 1000;
        _0x508048.style.transform = "translate(-50%, -50%) rotate(90deg) scale(" + _0x3af30b + ")";
      }
    }
  }
  _0x4f69a7.prototype.$resizePage = function () {
    const _0x16d712 = window.innerWidth;
    const _0x153747 = window.innerHeight;
    if ((!(_0x16d712 >= 1000) || !(_0x153747 >= 608)) && (!(_0x16d712 >= 608) || !(_0x153747 >= 1000)) && !_0x326d05) {
      _0x326d05 = true;
      window.addEventListener("resize", _0x4d926a);
    }
    _0x4d926a();
  };
}
let _0x51d8e5;
_0x10faf6.locale("zh-cn");
_0x10faf6.extend(_0x8a7309);
_0x10faf6.extend(_0xcb8a20);
_0x5df579.Ay.filter("formatPropNum", function (_0x1a78f6) {
  if (_0x1a78f6 !== null && _0x1a78f6 <= 0) {
    _0x1a78f6 = 1;
  }
  return _0x1a78f6;
});
_0x5df579.Ay.filter("formatPropType", function (_0x4977a5) {
  switch (_0x4977a5) {
    case "collection":
      return "收集类";
    case "experience":
      return "增益类";
    case "reel":
      return "卷轴类";
    case "special":
      return "特殊类";
    case "goldCoinCard":
      return "金币凭证";
    case "crystalCard":
      return "水晶凭证";
    case "evolution":
      return "进化类";
    case "pockball":
      return "捕捉类";
    case "synthesis":
      return "合成类";
    case "ability":
      return "功能类";
    case "nirvana":
      return "涅磐类";
    case "treasure":
      return "礼包类";
    case "egg":
      return "宠物卵";
    case "passport":
      return "通行证";
    case "magicBook":
      return "技能书";
    case "refinement":
      return "精炼类";
    case "enhancement":
      return "强化类";
    case "equipment":
      return "装备类";
    case "godlyEvolution":
      return "神宠进化";
    case "fragment":
      return "装备碎片";
    default:
      return "未知类";
  }
});
class _0x5a00e8 {
  constructor() {
    this.throttle = false;
  }
  init(_0x46aa9b) {
    this.app = _0x46aa9b;
    this.store = _0x46aa9b.$store;
  }
  useProp(_0x18cbde, _0x2a1c71, _0x501c55, _0x44b88a) {
    if (this.throttle) {
      return;
    }
    this.throttle = true;
    if (_0x18cbde.num <= 0) {
      _0x44b88a({
        status: "insufficient",
        message: "使用失败：道具数量不足！"
      });
      this.throttle = false;
      return;
    }
    const _0x24f8f4 = this.store.state.playerModule.packageDetail.packageProps.find(_0x3afb9f => _0x3afb9f.name === _0x18cbde.name);
    if (!_0x24f8f4) {
      _0x44b88a({
        status: "absent",
        message: "使用失败：请先选择您要使用的道具！"
      });
      this.throttle = false;
      return;
    }
    switch (_0x18cbde.type) {
      case "collection":
        _0x44b88a({
          status: "disable",
          message: "收集类道具无法直接使用哦，看看任务中是否有需求吧！"
        });
        break;
      case "experience":
        this.useExpProp(_0x18cbde, _0x501c55, _0x44b88a);
        break;
      case "reel":
        this.useReelProp(_0x18cbde, _0x2a1c71, _0x501c55, _0x44b88a);
        break;
      case "special":
        this.useSpecialProp(_0x18cbde, _0x501c55, _0x44b88a);
        break;
      case "goldCoinCard":
        _0x44b88a({
          status: "fail",
          message: "该物品不能直接使用噢，去问问道具商店的尤法是否收购吧！"
        });
        break;
      case "crystalCard":
        this.useCrystalCardProp(_0x18cbde, _0x501c55, _0x44b88a);
        break;
      case "evolution":
        _0x44b88a({
          status: "fail",
          message: _0x18cbde.name + "只能在宠物神殿进行宠物进化哦！"
        });
        break;
      case "godlyEvolution":
        _0x44b88a({
          status: "fail",
          message: _0x18cbde.name + "只能在宠物神殿进行指定神宠进化时使用哦！"
        });
        break;
      case "pockball":
        this.usePockBall(_0x18cbde, _0x2a1c71, _0x501c55, _0x44b88a);
        break;
      case "synthesis":
        this.useSynthesisProp(_0x18cbde, _0x2a1c71, _0x501c55, _0x44b88a);
        break;
      case "ability":
        this.useAbilityProp(_0x18cbde, _0x501c55, _0x44b88a);
        break;
      case "nirvana":
        this.useNirvanaProp(_0x18cbde, _0x2a1c71, _0x501c55, _0x44b88a);
        break;
      case "treasure":
        this.useTreasureProp(_0x18cbde, _0x501c55, _0x44b88a);
        break;
      case "egg":
        this.useEggProp(_0x18cbde, _0x501c55, _0x44b88a);
        break;
      case "passport":
        _0x44b88a({
          status: "fail",
          message: "该物品只能在对应副本地图中使用噢！"
        });
        break;
      case "magicBook":
        this.useMagicBookProp(_0x18cbde, _0x2a1c71, _0x501c55, _0x44b88a);
        break;
      case "refinement":
        _0x44b88a({
          status: "fail",
          message: "该物品只能在图纸锻造装备时被消耗噢！"
        });
        break;
      case "equipment":
        this.useEquipmentProp(_0x18cbde, _0x2a1c71, _0x501c55, _0x44b88a);
        break;
      case "enhancement":
        _0x44b88a({
          status: "fail",
          message: "该物品只能在铁匠铺强化装备时使用噢！"
        });
        break;
      default:
        _0x44b88a({
          status: "fail",
          message: "该道具使用方式暂未确定！"
        });
    }
    this.throttle = false;
  }
  useReelProp(_0x20db1f, _0x79bebf, _0x391e7c, _0x2b73a9) {
    const {
      component: _0xdc7227
    } = _0x79bebf;
    const _0x46bc3d = _0x44fcd9.aQ.find(_0x185934 => _0x185934.name === _0x20db1f.name);
    const {
      packageDetail: _0x54c89d,
      storeDetail: _0x48d235
    } = this.app.$store.state.playerModule;
    const _0x212bd2 = _0x54c89d.packageProps.length;
    const _0x113e3c = _0x54c89d.maxCapacity;
    const _0x3d59de = _0x48d235.maxCapacity;
    const _0x2cd633 = this.app.$store.state.petModule.pastureMaxCapacity;
    function _0x24dc8d() {
      switch (_0x20db1f.name) {
        case "技能升级卷轴":
          if (_0xdc7227 !== "petMagic") {
            _0x2b73a9({
              status: "fail",
              message: "技能升级卷轴无法直接使用，请到宠物资料面版升级您的宠物技能哦！"
            });
          } else {
            this.store.commit("playerModule/changePackageProps", {
              handle: "reduce",
              props: [_0x20db1f],
              num: 1,
              resolve: _0x391e7c,
              reject: _0x2b73a9
            });
          }
          break;
        case "背包升级卷轴":
          if (_0x113e3c >= 260) {
            _0x2b73a9({
              status: "fail",
              message: "你的背包容量已经达到上限，无法再提升啦"
            });
          } else {
            new SSPromise((_0x3b7285, _0x42b1a2) => {
              this.store.commit("playerModule/changePackageProps", {
                handle: "reduce",
                props: [_0x20db1f],
                num: 1,
                resolve: _0x3b7285,
                reject: _0x42b1a2
              });
            }).then(() => {
              this.store.commit("playerModule/increaseMaxCapacity", {
                title: "packageDetail"
              });
              _0x391e7c({
                status: "success",
                message: "您的背包容量上限成功提升5格"
              });
            }).catch(_0x124be3 => {
              _0x2b73a9(_0x124be3);
            });
          }
          break;
        case "仓库升级卷轴":
          if (_0x3d59de >= 300) {
            _0x2b73a9({
              status: "fail",
              message: "你的仓库容量已经达到上限，无法再提升啦"
            });
          } else {
            new SSPromise((_0x5ad1df, _0x4a0e46) => {
              this.store.commit("playerModule/changePackageProps", {
                handle: "reduce",
                props: [_0x20db1f],
                num: 1,
                resolve: _0x5ad1df,
                reject: _0x4a0e46
              });
            }).then(() => {
              this.store.commit("playerModule/increaseMaxCapacity", {
                title: "storeDetail"
              });
              _0x391e7c({
                status: "success",
                message: "您的仓库容量上限成功提升5格"
              });
            }).catch(_0x504136 => {
              _0x2b73a9(_0x504136);
            });
          }
          break;
        case "牧场升级卷轴":
          if (_0x2cd633 >= 300) {
            _0x2b73a9({
              status: "fail",
              message: "你的牧场可存放宠物数量已经达到上限，无法再提升啦"
            });
          } else {
            new SSPromise((_0xe78e85, _0xbabf37) => {
              this.store.commit("playerModule/changePackageProps", {
                handle: "reduce",
                props: [_0x20db1f],
                num: 1,
                resolve: _0xe78e85,
                reject: _0xbabf37
              });
            }).then(() => {
              this.store.commit("petModule/increaseMaxCapacity");
              _0x391e7c({
                status: "success",
                message: "您的牧场可存放宠物上限成功提升5格"
              });
            }).catch(_0x2d1463 => {
              _0x2b73a9(_0x2d1463);
            });
          }
          break;
        default:
          _0x2b73a9({
            status: "fail",
            message: "该道具使用方式暂未确定！"
          });
      }
    }
    function _0x20bcf8() {
      const _0x136383 = _0x54c89d.packageProps;
      let _0x2c75c2 = false;
      for (let _0x3ea7d6 = 0; _0x3ea7d6 < _0x46bc3d.propsReq.length; _0x3ea7d6++) {
        const _0x5497f6 = _0x46bc3d.propsReq[_0x3ea7d6];
        const _0x40370e = _0x136383.find(_0x32e406 => _0x32e406.name === _0x5497f6.name);
        if (!_0x40370e || _0x40370e.num < _0x5497f6.num) {
          _0x2c75c2 = true;
          break;
        }
      }
      if (_0x2c75c2) {
        _0x2b73a9({
          status: "fail",
          message: "使用失败：你还没有集齐使用该卷轴需要的所有材料。"
        });
      } else {
        for (let _0xdc5d4d = 0; _0xdc5d4d < _0x46bc3d.propsReq.length; _0xdc5d4d++) {
          this.store.commit("playerModule/changePackageProps", {
            handle: "reduce",
            props: [_0x46bc3d.propsReq[_0xdc5d4d]],
            num: _0x46bc3d.propsReq[_0xdc5d4d].num,
            resolve: _0x2bf3fb.lQ,
            reject: _0x2bf3fb.lQ
          });
        }
        new SSPromise((_0x4971a6, _0x438687) => {
          this.store.commit("playerModule/changePackageProps", {
            handle: "reduce",
            props: [_0x20db1f],
            num: 1,
            resolve: _0x4971a6,
            reject: _0x438687
          });
        }).then(() => {
          let _0x39ce12 = _0x44fcd9.uP.find(_0x30312b => _0x30312b.name === _0x46bc3d.propsRes[0].name);
          _0x39ce12 = _0x4d9b0d(_0x39ce12);
          _0x39ce12.num = _0x46bc3d.propsRes[0].num;
          this.store.commit("playerModule/changePackageProps", {
            handle: "add",
            props: [_0x39ce12],
            resolve: _0x2bf3fb.lQ,
            reject: _0x2bf3fb.lQ
          });
          _0x391e7c({
            status: "success",
            message: "使用成功：您得到一个" + _0x39ce12.name + "!"
          });
        }).catch(_0x924066 => {
          _0x2b73a9(_0x924066);
        });
      }
    }
    new SSPromise((_0x5ea46a, _0x7764a3) => {
      if (_0x46bc3d) {
        if (_0x46bc3d.propsRes && _0x212bd2 >= _0x113e3c) {
          _0x7764a3({
            status: "fail",
            message: "使用失败：您的背包空间不足！"
          });
        } else if (_0x46bc3d.consumable) {
          _0x20bcf8.call(this);
        } else {
          _0x24dc8d.call(this);
        }
      } else {
        _0x7764a3({
          status: "fail",
          message: "使用失败：没有找到该卷轴具体使用详情！"
        });
      }
    }).then(_0x4ce497 => {
      _0x391e7c(_0x4ce497);
    }).catch(_0x5d8567 => {
      _0x2b73a9(_0x5d8567);
    });
  }
  useMagicBookProp(_0x5dc7d0, _0x50949b, _0x329569, _0x1fd884) {
    if (_0x50949b.component !== "petMagic") {
      _0x1fd884({
        status: "fail",
        message: "技能书无法直接使用，请到宠物资料面版进行宠物技能学习！"
      });
      return;
    }
    let _0x5e7529 = _0x44fcd9.jk.find(_0x4b3126 => _0x4b3126.name === _0x5dc7d0.name);
    if (_0x5e7529) {
      _0x5e7529 = _0x4d9b0d(_0x5e7529);
      _0x5e7529.rank = 1;
      new SSPromise((_0x216d13, _0x483454) => {
        this.store.commit("petModule/learnMagic", {
          magicDetail: _0x5e7529,
          resolve: _0x216d13,
          reject: _0x483454
        });
      }).then(_0xb3025d => {
        this.store.commit("playerModule/changePackageProps", {
          handle: "reduce",
          props: [_0x5dc7d0],
          num: 1,
          resolve: _0x2bf3fb.lQ,
          reject: _0x2bf3fb.lQ
        });
        _0x329569(_0xb3025d);
      }).catch(_0xf64582 => {
        _0x1fd884(_0xf64582);
      });
    } else {
      _0x1fd884({
        status: "fail",
        message: "没有找到该技能详情信息！"
      });
    }
  }
  usePockBall(_0xa68ea7, _0x2c89c0, _0x3ca68a, _0x48123f) {
    const {
      monster: _0x579b6f,
      component: _0x4bd463
    } = _0x2c89c0;
    if (_0x4bd463 !== "wildBattle") {
      _0x48123f({
        status: "fail",
        message: "精灵球只能在野外战斗中使用哦！"
      });
      return;
    }
    let _0x1b930d;
    let _0x2853f9;
    new SSPromise((_0x13abb9, _0x2eed61) => {
      _0x2853f9 = _0x44fcd9.cC.find(_0x1a31a7 => _0x1a31a7.name === _0x579b6f.name).rate;
      if (_0x2853f9) {
        this.store.commit("playerModule/changePackageProps", {
          handle: "reduce",
          props: [_0xa68ea7],
          num: 1,
          resolve: _0x13abb9,
          reject: _0x2eed61
        });
      } else {
        _0x2eed61({
          status: "fail",
          message: "捕捉失败：该怪物无法被捕捉!"
        });
      }
    }).then(() => {
      const _0x1088c5 = (1 - _0x579b6f.hp / _0x579b6f.maxHp) * 0.2;
      _0x1b930d = Math.random();
      let _0x2f2f2d = _0x1b930d + _0x2853f9 + _0x1088c5;
      if (_0x2f2f2d >= 1) {
        this.app.$petFunc.catchPet(_0x579b6f.figure, _0x3ca68a);
      } else {
        _0x48123f({
          status: "fail",
          message: "捕捉失败, " + _0x579b6f.name + " 挣脱了精灵球的束缚！"
        });
      }
    }).catch(_0x35d06b => {
      _0x48123f(_0x35d06b);
    });
  }
  useExpProp(_0x55bb5a, _0x19fa9c, _0x515b22) {
    let _0x4cdd5c;
    new SSPromise((_0x3cd168, _0x3656f6) => {
      if (!this.store.state.petModule.curPetId) {
        _0x3656f6({
          status: "fail",
          message: "请在部分场景(如：宠物资料)选中宠物后使用增益道具！"
        });
        return;
      }
      const _0x24364b = _0x44fcd9.CO.find(_0x4a7225 => _0x4a7225.name === _0x55bb5a.name);
      if (_0x24364b) {
        if (_0x24364b.limit) {
          const _0xfadd32 = this.app.$store.getters["petModule/curPet"];
          if (_0xfadd32.level < _0x24364b.limit) {
            _0x3656f6({
              status: "fail",
              message: "使用失败：" + _0xfadd32.name + "等级低于" + _0x24364b.limit + "级，无法使用" + _0x55bb5a.name + "。"
            });
            return;
          }
        }
        _0x4cdd5c = _0x24364b.rate instanceof Array ? (0, _0x2bf3fb.bd)(_0x24364b.rate[0], _0x24364b.rate[1]) : _0x24364b.rate;
        this.store.commit("playerModule/changePackageProps", {
          handle: "reduce",
          props: [_0x55bb5a],
          num: 1,
          resolve: _0x3cd168,
          reject: _0x3656f6
        });
      } else {
        _0x3656f6({
          status: "fail",
          message: "使用失败：没有找到该物品的详细数据！"
        });
      }
    }).then(_0x1bafed => {
      this.store.commit("petModule/addCurPetExp", _0x4cdd5c);
      _0x1bafed.status = "success";
      _0x1bafed.message = "使用成功：主战宠物获得 " + _0x4cdd5c + " 经验";
      _0x19fa9c(_0x1bafed);
    }).catch(_0x220eac => {
      _0x515b22(_0x220eac);
    });
  }
  useSynthesisProp(_0x2f43a4, _0xf6b22d, _0x47239e, _0x46af7b) {
    const {
      component: _0xdf0a93
    } = _0xf6b22d;
    if (_0xdf0a93 !== "petTemple") {
      _0x46af7b({
        status: "fail",
        message: _0x2f43a4.name + "只能在宠物神殿用于宠物合成哦！"
      });
      this.throttle = false;
      return;
    }
    const _0x5ea282 = _0x44fcd9.Yj.find(_0x27c5b => _0x27c5b.name === _0x2f43a4.name);
    if (!_0x5ea282) {
      _0x46af7b({
        status: "fail",
        message: "合成失败：" + _0x2f43a4.name + "并不是一个符合要求的的合成类道具噢！"
      });
      this.throttle = false;
      return;
    }
    new SSPromise((_0x4a8c59, _0x3b3ed2) => {
      this.store.commit("playerModule/changePackageProps", {
        handle: "reduce",
        props: [_0x2f43a4],
        num: 1,
        resolve: _0x4a8c59,
        reject: _0x3b3ed2
      });
    }).then(() => {
      _0x47239e({
        status: "success",
        data: _0x5ea282.effect
      });
    }).catch(_0x217917 => {
      _0x46af7b(_0x217917);
    });
  }
  useNirvanaProp(_0x44ddc0, _0x1bdf8a, _0x5c6d7a, _0x48b779) {
    const {
      component: _0x115663
    } = _0x1bdf8a;
    if (_0x115663 !== "petTemple") {
      _0x48b779({
        status: "fail",
        message: _0x44ddc0.name + "只能在宠物神殿用于神宠涅磐哦！"
      });
      this.throttle = false;
      return;
    }
    const _0x1dfac0 = _0x44fcd9.Bu.find(_0x594271 => _0x594271.name === _0x44ddc0.name);
    if (!_0x1dfac0) {
      _0x48b779({
        status: "fail",
        message: _0x44ddc0.name + "并不是一个符合要求的的涅磐类道具噢！"
      });
      this.throttle = false;
      return;
    }
    new SSPromise((_0x4ccac5, _0x234976) => {
      this.store.commit("playerModule/changePackageProps", {
        handle: "reduce",
        props: [_0x44ddc0],
        num: 1,
        resolve: _0x4ccac5,
        reject: _0x234976
      });
    }).then(() => {
      _0x5c6d7a({
        status: "success",
        data: _0x1dfac0.effect
      });
    }).catch(_0x213547 => {
      _0x48b779(_0x213547);
    });
  }
  useAbilityProp(_0xa8c02b, _0x5be66e, _0x3570c8) {
    let _0x448c15;
    new SSPromise((_0x4c4621, _0x38f029) => {
      const _0x1d897a = _0x44fcd9.E5.find(_0x3e5e3e => _0x3e5e3e.name === _0xa8c02b.name).rate;
      if (_0x1d897a) {
        _0x448c15 = _0x1d897a instanceof Array ? (0, _0x2bf3fb.bd)(_0x1d897a[0], _0x1d897a[1]) : _0x1d897a;
        this.store.commit("playerModule/changePackageProps", {
          handle: "reduce",
          props: [_0xa8c02b],
          num: 1,
          resolve: _0x4c4621,
          reject: _0x38f029
        });
      } else {
        _0x38f029({
          status: "fail",
          message: "使用失败：没有找到该物品详情数据！"
        });
      }
    }).then(_0x4e9f6b => {
      this.store.commit("playerModule/changePlayerDetail", {
        sKey: "prestige",
        sValue: _0x448c15
      });
      _0x4e9f6b.message = "使用成功：您获得" + _0x448c15 + "点威望！";
      _0x5be66e(_0x4e9f6b);
    }).catch(_0x4449db => {
      _0x3570c8(_0x4449db);
    });
  }
  useSpecialProp(_0x1c360b, _0x482df8, _0x572c12) {
    _0x572c12({
      status: "fail",
      message: "该道具不支持直接使用噢！"
    });
    this.throttle = false;
  }
  useCrystalCardProp(_0x53be90, _0x8207c1, _0x239326) {
    let _0x33fd13;
    new SSPromise((_0x3f759c, _0xe37227) => {
      const _0x24f361 = _0x44fcd9.a1.find(_0x737c3d => _0x737c3d.name === _0x53be90.name).rate;
      if (_0x24f361) {
        _0x33fd13 = _0x24f361 instanceof Array ? (0, _0x2bf3fb.bd)(_0x24f361[0], _0x24f361[1]) : _0x24f361;
        this.store.commit("playerModule/changePackageProps", {
          handle: "reduce",
          props: [_0x53be90],
          num: 1,
          resolve: _0x3f759c,
          reject: _0xe37227
        });
      } else {
        _0xe37227({
          status: "fail",
          message: "使用失败：没有找到该物品的详细数据！"
        });
      }
    }).then(_0x309583 => {
      this.store.commit("playerModule/changePlayerDetail", {
        sKey: "crystal",
        sValue: _0x33fd13
      });
      _0x309583.message = "使用成功：您获得" + _0x33fd13 + "点水晶！";
      _0x8207c1(_0x309583);
    }).catch(_0x47c7af => {
      _0x239326(_0x47c7af);
    });
  }
  useTreasureProp(_0x3c8740, _0x5b7f31, _0x5dfb81) {
    const _0x5bbdf7 = _0x44fcd9.t7.find(_0x275ef4 => _0x275ef4.name === _0x3c8740.name);
    if (!_0x5bbdf7) {
      _0x5dfb81({
        status: "fail",
        message: "使用失败：没有找到该道具详情！"
      });
      this.throttle = false;
      return;
    }
    const _0x9419fb = this.store.state.playerModule.packageDetail;
    const _0x36febd = _0x9419fb.maxCapacity - _0x9419fb.packageProps.length;
    if (_0x36febd < _0x5bbdf7.capacity) {
      _0x5dfb81({
        status: "fail",
        message: "使用失败：您的背包空间不足！"
      });
      this.throttle = false;
      return;
    }
    if (_0x5bbdf7.type === "select") {
      const _0x29ec64 = _0x5bbdf7.gifts;
      for (let _0x165d20 in _0x29ec64) {
        const _0x1a5ca8 = _0x4d9b0d(_0x44fcd9.uP.find(_0x1acfa0 => _0x1acfa0.name === _0x29ec64[_0x165d20].name));
        _0x1a5ca8.num = _0x29ec64[_0x165d20].num;
        _0x29ec64[_0x165d20] = _0x1a5ca8;
      }
      _0x5b7f31({
        status: "treasureSelect",
        data: {
          treasure: _0x3c8740,
          gifts: _0x29ec64,
          gift: null
        }
      });
      return;
    }
    const _0x591b4a = [];
    new SSPromise((_0x26266d, _0x41044d) => {
      if (_0x5bbdf7.type === "random") {
        const _0x1dc605 = _0x5bbdf7.gifts;
        let _0x3b84ac = (0, _0x2bf3fb.bd)(1, 1000);
        for (let _0x8dd60f of _0x1dc605) {
          if (_0x3b84ac >= _0x8dd60f.rate[0] && _0x3b84ac <= _0x8dd60f.rate[1]) {
            const _0x403560 = _0x44fcd9.uP.find(_0x3b529d => _0x3b529d.name === _0x8dd60f.name);
            if (!_0x403560) {
              _0x41044d({
                status: "fail",
                message: "使用失败：没有找到对应物品详情数据！"
              });
              return;
            }
            const _0x2b356b = (0, _0x2bf3fb.X$)({}, _0x403560);
            _0x2b356b.num = _0x8dd60f.num || 1;
            _0x591b4a.push(_0x2b356b);
            break;
          }
        }
      } else if (_0x5bbdf7.type === "fix") {
        const _0x8f5ebb = _0x5bbdf7.gifts;
        for (let _0x21eb63 of _0x8f5ebb) {
          const _0x247466 = _0x44fcd9.uP.find(_0x4fbb5c => _0x4fbb5c.name === _0x21eb63.name);
          if (!_0x247466) {
            _0x41044d({
              status: "fail",
              message: "使用失败：没有找到对应物品详情数据！"
            });
            return;
          }
          const _0x2953a9 = JSON.parse(JSON.stringify(_0x247466));
          _0x2953a9.num = _0x21eb63.num || 1;
          _0x591b4a.push(_0x2953a9);
        }
      }
      this.store.commit("playerModule/changePackageProps", {
        handle: "reduce",
        props: [_0x3c8740],
        num: 1,
        resolve: _0x26266d,
        reject: _0x41044d
      });
    }).then(_0x588ae2 => {
      this.store.commit("playerModule/changePackageProps", {
        handle: "add",
        props: _0x591b4a,
        resolve: _0x2bf3fb.lQ,
        reject: _0x2bf3fb.lQ
      });
      let _0x5a77c7 = [];
      for (let _0x32bc14 = 0; _0x32bc14 < _0x591b4a.length; _0x32bc14++) {
        _0x5a77c7.push(_0x591b4a[_0x32bc14].name + " " + _0x591b4a[_0x32bc14].num + "个");
      }
      _0x5a77c7 = _0x5a77c7.join(",");
      _0x588ae2.message = "获得道具：" + _0x5a77c7;
      _0x5b7f31(_0x588ae2);
      const _0x1fcb40 = {
        treasure: _0x3c8740.name
      };
      _0x1fcb40.props = _0x591b4a.map(_0x3ac14a => ({
        name: _0x3ac14a.name,
        num: _0x3ac14a.num,
        level: _0x3ac14a.level
      }));
    }).catch(_0x49687c => {
      _0x5dfb81(_0x49687c);
    });
  }
  useEggProp(_0x88256d, _0x2c938d, _0x25dc4c) {
    if (this.store.state.petModule.curPetsId.length >= 4) {
      _0x25dc4c({
        status: "fail",
        message: "使用失败：您当前携带宠物数量已达到上限，请先寄存部分宠物于牧场吧！"
      });
      this.throttle = false;
      return;
    }
    const _0x49d6a7 = _0x44fcd9.XD.find(_0x4a645a => _0x4a645a.name === _0x88256d.name);
    if (_0x49d6a7) {
      new SSPromise((_0x5f298a, _0x122078) => {
        this.store.commit("playerModule/changePackageProps", {
          handle: "reduce",
          props: [_0x88256d],
          num: 1,
          resolve: _0x5f298a,
          reject: _0x122078
        });
      }).then(() => {
        new SSPromise(_0x4b3658 => {
          this.app.$petFunc.addPetByEgg(_0x49d6a7, _0x4b3658);
        }).then(_0x1f03db => {
          _0x2c938d(_0x1f03db);
        });
      }).catch(_0x42037e => {
        _0x25dc4c(_0x42037e);
      });
    } else {
      _0x25dc4c({
        status: "fail",
        message: "使用失败：没有找到该宠物卵详情数据！"
      });
    }
  }
  useEquipmentProp(_0x1c6c46, _0x4428cb, _0x52f69a, _0xd84796) {
    const {
      component: _0x3ba0ed
    } = _0x4428cb;
    let _0x4a4c99;
    if (_0x3ba0ed === "toolPackage") {
      _0x4a4c99 = "wearEquipment";
    }
    this.store.commit("playerModule/changeWornEquipments", {
      prop: _0x1c6c46,
      handle: _0x4a4c99,
      resolve: _0x52f69a,
      reject: _0xd84796
    });
  }
  propRefresh(_0x36ce1f) {
    const _0x1f20cb = this.app.$store.state.playerModule.packageDetail.packageProps;
    const _0x45b3d0 = this.app.$store.state.playerModule.storeDetail.storeProps;
    for (let _0x20bf00 = 0; _0x20bf00 < _0x1f20cb.length; _0x20bf00++) {
      const _0x43c0c8 = _0x1f20cb[_0x20bf00];
      if (!_0x36ce1f.includes(_0x43c0c8.name)) {
        continue;
      }
      const _0x154aa4 = _0x44fcd9.uP.find(_0x8b0fd5 => _0x8b0fd5.name === _0x43c0c8.name);
      _0x43c0c8.description = _0x4d9b0d(_0x154aa4.description);
      _0x43c0c8.price = _0x154aa4.price;
      _0x43c0c8.sort = _0x154aa4.sort;
      _0x43c0c8.level = _0x154aa4.level;
      if (_0x154aa4.img) {
        _0x43c0c8.img = _0x154aa4.img;
      }
    }
    for (let _0x45fdcb = 0; _0x45fdcb < _0x45b3d0.length; _0x45fdcb++) {
      const _0x4218e8 = _0x45b3d0[_0x45fdcb];
      if (!_0x36ce1f.includes(_0x4218e8.name)) {
        continue;
      }
      const _0x4d794f = _0x44fcd9.uP.find(_0x37a15f => _0x37a15f.name === _0x4218e8.name);
      _0x4218e8.description = _0x4d9b0d(_0x4d794f.description);
      _0x4218e8.price = _0x4d794f.price;
      _0x4218e8.sort = _0x4d794f.sort;
      _0x4218e8.level = _0x4d794f.level;
      if (_0x4d794f.img) {
        _0x4218e8.img = _0x4d794f.img;
      }
    }
    this.app.$store.state.playerModule.packageDetail.packageProps = _0x1f20cb;
    this.app.$store.state.playerModule.storeDetail.storeProps = _0x45b3d0;
  }
  propsTranslate(_0x489ffc, _0x1f774e) {
    const _0x3b01b6 = this.app.$store.state.playerModule.packageDetail.packageProps;
    const _0x23d82d = this.app.$store.state.playerModule.packageDetail.maxCapacity;
    const _0x4e8f88 = this.app.$store.state.playerModule.storeDetail.storeProps;
    if (_0x23d82d <= _0x3b01b6.length) {
      return;
    }
    const _0xb46946 = {
      name: _0x1f774e,
      num: 0
    };
    for (let _0x19e0c9 of _0x489ffc) {
      const _0x5e3231 = _0x3b01b6.find(_0x14ef38 => _0x14ef38.name === _0x19e0c9);
      if (_0x5e3231) {
        _0xb46946.num += _0x5e3231.num;
        this.app.$store.commit("playerModule/changePackageProps", {
          handle: "delete",
          props: [_0x5e3231],
          resolve: _0x2bf3fb.lQ,
          reject: _0x2bf3fb.lQ
        });
      }
      const _0x494121 = _0x4e8f88.find(_0x3fe870 => _0x3fe870.name === _0x19e0c9);
      if (_0x494121) {
        _0xb46946.num += _0x494121.num;
        this.app.$store.commit("playerModule/changeStoreProps", {
          handle: "delete",
          props: [_0x494121],
          resolve: _0x2bf3fb.lQ,
          reject: _0x2bf3fb.lQ
        });
      }
    }
    if (_0xb46946.num > 0) {
      const _0x418dd0 = _0x4d9b0d(_0x44fcd9.uP.find(_0x3fc6c1 => _0x3fc6c1.name === _0xb46946.name));
      _0x418dd0.num = _0xb46946.num;
      this.app.$store.commit("playerModule/changePackageProps", {
        handle: "add",
        props: [_0x418dd0],
        resolve: _0x2bf3fb.lQ,
        reject: _0x2bf3fb.lQ
      });
    }
  }
  propsUpdate(_0x3e74dd) {
    const _0x33f4bb = this.app.$store.state.playerModule.packageDetail.packageProps;
    const _0x399be1 = this.app.$store.state.playerModule.storeDetail.storeProps;
    for (let _0x426bf3 = 0; _0x426bf3 < _0x33f4bb.length; _0x426bf3++) {
      const _0x2b6764 = _0x33f4bb[_0x426bf3];
      if (_0x3e74dd && _0x2b6764.type !== _0x3e74dd) {
        continue;
      }
      const _0xcbb5b1 = _0x44fcd9.uP.find(_0x1d6b88 => _0x1d6b88.name === _0x2b6764.name);
      _0x2b6764.price = _0xcbb5b1.price;
      _0x2b6764.id = _0xcbb5b1.id;
    }
    for (let _0x16b64e = 0; _0x16b64e < _0x399be1.length; _0x16b64e++) {
      const _0x24d8ae = _0x399be1[_0x16b64e];
      if (_0x3e74dd && _0x24d8ae.type !== _0x3e74dd) {
        continue;
      }
      const _0x16c1d2 = _0x44fcd9.uP.find(_0xf0edb7 => _0xf0edb7.name === _0x24d8ae.name);
      _0x24d8ae.price = _0x16c1d2.price;
      _0x24d8ae.id = _0x16c1d2.id;
    }
    this.app.$store.state.playerModule.packageDetail.packageProps = _0x33f4bb;
    this.app.$store.state.playerModule.storeDetail.storeProps = _0x399be1;
    this.app.$gameLocalStorage.setItem("packageDetail", this.app.$store.state.playerModule.packageDetail);
    this.app.$gameLocalStorage.setItem("storeDetail", this.app.$store.state.playerModule.storeDetail);
  }
  propsTypeUpdate(_0x4233e7) {
    const _0x550c6c = this.app.$store.state.playerModule.packageDetail.packageProps;
    const _0x563f23 = this.app.$store.state.playerModule.storeDetail.storeProps;
    for (let _0x4eb8b1 = 0; _0x4eb8b1 < _0x550c6c.length; _0x4eb8b1++) {
      const _0x569b3b = _0x550c6c[_0x4eb8b1];
      if (_0x4233e7 && _0x569b3b.type !== _0x4233e7) {
        continue;
      }
      const _0x43e640 = _0x44fcd9.uP.find(_0x33eafa => _0x33eafa.name === _0x569b3b.name);
      _0x569b3b.typeSort = _0x43e640.typeSort;
    }
    for (let _0x30f382 = 0; _0x30f382 < _0x563f23.length; _0x30f382++) {
      const _0x16c1f1 = _0x563f23[_0x30f382];
      if (_0x4233e7 && _0x16c1f1.type !== _0x4233e7) {
        continue;
      }
      const _0x100d3f = _0x44fcd9.uP.find(_0x4b8757 => _0x4b8757.name === _0x16c1f1.name);
      _0x16c1f1.typeSort = _0x100d3f.typeSort;
    }
    this.app.$store.state.playerModule.packageDetail.packageProps = _0x550c6c;
    this.app.$store.state.playerModule.storeDetail.storeProps = _0x563f23;
    this.app.$gameLocalStorage.setItem("packageDetail", this.app.$store.state.playerModule.packageDetail);
    this.app.$gameLocalStorage.setItem("storeDetail", this.app.$store.state.playerModule.storeDetail);
  }
  equipmentTypeUpdate() {
    let _0x2984f7 = _0x4d9b0d(_0x44fcd9.uP.filter(_0x5d91a6 => _0x5d91a6.type === "equipment"));
    _0x2984f7 = _0x2984f7.map(_0x198227 => _0x198227.name);
    const _0x5a847b = this.app.$store.state.playerModule.wornEquipments;
    for (let _0x4eac96 = 0; _0x4eac96 < _0x5a847b.length; _0x4eac96++) {
      const _0x19a700 = _0x5a847b[_0x4eac96].equipments;
      for (let _0x35be15 = 0; _0x35be15 < _0x19a700.length; _0x35be15++) {
        const _0x3524b7 = _0x19a700[_0x35be15];
        if (!_0x2984f7.includes(_0x3524b7.name)) {
          continue;
        }
        const _0x426ef4 = _0x44fcd9.uP.find(_0xa39d08 => _0xa39d08.name === _0x3524b7.name);
        _0x3524b7.typeSort = _0x426ef4.typeSort;
      }
    }
    this.app.$store.state.playerModule.wornEquipments = _0x5a847b;
    this.app.$gameLocalStorage.setItem("wornEquipments", _0x5a847b);
  }
  equipmentsSuitsRefresh() {
    let _0x18f817 = _0x4d9b0d(_0x44fcd9.uP.filter(_0x47bbff => _0x47bbff.type === "equipment"));
    _0x18f817 = _0x18f817.map(_0x5959fe => _0x5959fe.name);
    const _0x6104db = this.app.$store.state.playerModule.packageDetail.packageProps;
    const _0x18abcc = this.app.$store.state.playerModule.storeDetail.storeProps;
    const _0x231c9b = this.app.$store.state.playerModule.wornEquipments;
    for (let _0x3467f6 = 0; _0x3467f6 < _0x6104db.length; _0x3467f6++) {
      const _0x30bfe2 = _0x6104db[_0x3467f6];
      if (!_0x18f817.includes(_0x30bfe2.name)) {
        continue;
      }
      const _0x4b3218 = _0x44fcd9.uP.find(_0x190854 => _0x190854.name === _0x30bfe2.name);
      _0x30bfe2.description = _0x4d9b0d(_0x4b3218.description);
      _0x30bfe2.effects = _0x4d9b0d(_0x4b3218.effects);
      _0x30bfe2.enhancementLevel ||= 0;
      let _0x585f18;
      let _0x150867 = _0x30bfe2.effects[0].split(":");
      switch (_0x150867[0]) {
        case "maxHp":
          _0x585f18 = 30;
          break;
        case "maxMp":
          _0x585f18 = 12;
          break;
        case "atk":
          _0x585f18 = 8;
          break;
        case "def":
          _0x585f18 = 6;
          break;
        case "spd":
          _0x585f18 = 3;
          break;
        default:
          throw new Error("强化失败：没有找到该属性详情！");
      }
      _0x150867[1] = Number(_0x150867[1]) + _0x585f18 * _0x30bfe2.enhancementLevel;
      let _0x44b6e4 = _0x30bfe2.description[1].replace(/\d+/, _0x150867[1]);
      _0x30bfe2.effects[0] = _0x150867.join(":");
      _0x30bfe2.description[1] = _0x44b6e4;
    }
    for (let _0x126f8f = 0; _0x126f8f < _0x18abcc.length; _0x126f8f++) {
      const _0x3ca560 = _0x18abcc[_0x126f8f];
      if (!_0x18f817.includes(_0x3ca560.name)) {
        continue;
      }
      const _0x1a5ac1 = _0x44fcd9.uP.find(_0x5dee1e => _0x5dee1e.name === _0x3ca560.name);
      _0x3ca560.description = _0x4d9b0d(_0x1a5ac1.description);
      _0x3ca560.effects = _0x4d9b0d(_0x1a5ac1.effects);
      _0x3ca560.enhancementLevel ||= 0;
      let _0x2ece1c;
      let _0x7d0665 = _0x3ca560.effects[0].split(":");
      switch (_0x7d0665[0]) {
        case "maxHp":
          _0x2ece1c = 30;
          break;
        case "maxMp":
          _0x2ece1c = 12;
          break;
        case "atk":
          _0x2ece1c = 8;
          break;
        case "def":
          _0x2ece1c = 6;
          break;
        case "spd":
          _0x2ece1c = 3;
          break;
        default:
          throw new Error("强化失败：没有找到该属性详情！");
      }
      _0x7d0665[1] = Number(_0x7d0665[1]) + _0x2ece1c * _0x3ca560.enhancementLevel;
      let _0x4d285e = _0x3ca560.description[1].replace(/\d+/, _0x7d0665[1]);
      _0x3ca560.effects[0] = _0x7d0665.join(":");
      _0x3ca560.description[1] = _0x4d285e;
    }
    for (let _0x242ac7 = 0; _0x242ac7 < _0x231c9b.length; _0x242ac7++) {
      const _0x14b033 = _0x231c9b[_0x242ac7].equipments;
      for (let _0x31eb97 = 0; _0x31eb97 < _0x14b033.length; _0x31eb97++) {
        const _0x3c81f5 = _0x14b033[_0x31eb97];
        if (!_0x18f817.includes(_0x3c81f5.name)) {
          continue;
        }
        const _0x214730 = _0x44fcd9.uP.find(_0x274a92 => _0x274a92.name === _0x3c81f5.name);
        _0x3c81f5.description = _0x4d9b0d(_0x214730.description);
        _0x3c81f5.effects = _0x4d9b0d(_0x214730.effects);
        _0x3c81f5.enhancementLevel ||= 0;
        let _0x4774d8;
        let _0x41eb90 = _0x3c81f5.effects[0].split(":");
        switch (_0x41eb90[0]) {
          case "maxHp":
            _0x4774d8 = 30;
            break;
          case "maxMp":
            _0x4774d8 = 12;
            break;
          case "atk":
            _0x4774d8 = 8;
            break;
          case "def":
            _0x4774d8 = 6;
            break;
          case "spd":
            _0x4774d8 = 3;
            break;
          default:
            throw new Error("强化失败：没有找到该属性详情！");
        }
        _0x41eb90[1] = Number(_0x41eb90[1]) + _0x4774d8 * _0x3c81f5.enhancementLevel;
        let _0x3c632d = _0x3c81f5.description[1].replace(/\d+/, _0x41eb90[1]);
        _0x3c81f5.effects[0] = _0x41eb90.join(":");
        _0x3c81f5.description[1] = _0x3c632d;
      }
    }
    this.app.$store.state.playerModule.packageDetail.packageProps = _0x6104db;
    this.app.$store.state.playerModule.storeDetail.storeProps = _0x18abcc;
    this.app.$store.state.playerModule.wornEquipments = _0x231c9b;
    this.app.$gameLocalStorage.setItem("packageDetail", this.app.$store.state.playerModule.packageDetail);
    this.app.$gameLocalStorage.setItem("storeDetail", this.app.$store.state.playerModule.storeDetail);
    this.app.$gameLocalStorage.setItem("wornEquipments", _0x231c9b);
  }
  fixpacakgeAndStoreDetail() {
    let _0x33887a = this.app.$store.state.playerModule.packageDetail;
    let _0x6de7da = this.app.$store.state.playerModule.storeDetail;
    if (_0x33887a.maxCapacity == undefined) {
      _0x33887a = {
        maxCapacity: 260,
        packageProps: this.app.$store.state.playerModule.packageDetail
      };
      this.app.$store.state.playerModule.packageDetail = _0x33887a;
      this.app.$gameLocalStorage.setItem("packageDetail", _0x33887a);
    }
    if (_0x6de7da.maxCapacity == undefined) {
      _0x6de7da = {
        maxCapacity: this.app.$store.state.playerModule.packageDetail.length > 160 ? 300 : 160,
        storeProps: this.app.$store.state.playerModule.storeDetail
      };
      this.app.$store.state.playerModule.storeDetail = _0x6de7da;
      this.app.$gameLocalStorage.setItem("storeDetail", this.app.$store.state.playerModule.storeDetail);
    }
  }
}
function _0x5619c0(_0x70b978) {
  function _0x40525f(_0x46757c) {
    let _0x3c7684 = 3;
    if (_0x70b978.attribute === "金") {
      _0x3c7684 = 5;
    } else if (_0x70b978.attribute === "神") {
      _0x3c7684 = 4;
    }
    return _0x46757c + 10 + Math.pow(_0x70b978.growth, 0.5) * 3 + Math.pow(_0x70b978.rank, 0.5) * _0x3c7684;
  }
  function _0x335664(_0x2a432b) {
    let _0x3b859a = 3;
    if (_0x70b978.attribute === "水") {
      _0x3b859a = 5;
    } else if (_0x70b978.attribute === "神") {
      _0x3b859a = 4;
    }
    return _0x2a432b + 5 + Math.pow(_0x70b978.growth, 0.5) + Math.pow(_0x70b978.rank, 0.5) * _0x3b859a;
  }
  function _0x5aec68(_0x5695e1) {
    let _0x3df0cf = 3;
    if (_0x70b978.attribute === "火") {
      _0x3df0cf = 5;
    } else if (_0x70b978.attribute === "神") {
      _0x3df0cf = 4;
    }
    return _0x5695e1 + 4 + Math.pow(_0x70b978.growth, 0.5) * 1.4 + Math.pow(_0x70b978.rank, 0.5) * _0x3df0cf * 0.35;
  }
  function _0x40d8c7(_0x2ceab0) {
    let _0x9452e4 = 3;
    if (_0x70b978.attribute === "土") {
      _0x9452e4 = 5;
    } else if (_0x70b978.attribute === "神") {
      _0x9452e4 = 4;
    }
    return _0x2ceab0 + 3 + Math.pow(_0x70b978.growth, 0.5) + Math.pow(_0x70b978.rank, 0.5) * _0x9452e4 * 0.33;
  }
  function _0x49f7bd(_0x3d345b) {
    let _0x4f60a8 = 3;
    if (_0x70b978.attribute === "木") {
      _0x4f60a8 = 5;
    } else if (_0x70b978.attribute === "神") {
      _0x4f60a8 = 4;
    }
    return _0x3d345b + 1.2 + Math.pow(_0x70b978.growth, 0.5) * 0.7 + Math.pow(_0x70b978.rank, 0.5) * _0x4f60a8 * 0.3;
  }
  const _0x1167e2 = [{
    k: "maxHp",
    v: _0x40525f
  }, {
    k: "maxMp",
    v: _0x335664
  }, {
    k: "atk",
    v: _0x5aec68
  }, {
    k: "def",
    v: _0x40d8c7
  }, {
    k: "spd",
    v: _0x49f7bd
  }];
  for (let _0x166a74 = 0; _0x166a74 < _0x70b978.level; _0x166a74++) {
    for (let _0x183491 of _0x1167e2) {
      const _0x7aed24 = _0x183491.v;
      _0x70b978[_0x183491.k] = Math.floor(_0x7aed24(Number(_0x70b978[_0x183491.k])));
    }
  }
}
function _0x4d7c3f(_0x2903a6) {
  const _0x4457ec = [];
  for (let _0x1433d8 of _0x2903a6) {
    let _0x1604aa = _0x44fcd9.jk.find(_0x3bbf12 => _0x3bbf12.name === _0x1433d8);
    _0x1604aa = _0x4d9b0d(_0x1604aa);
    _0x1604aa.rank = 1;
    _0x4457ec.push(_0x1604aa);
  }
  return _0x4457ec;
}
function _0x1d9886(_0x2acefc) {
  let _0x2af1ee = 1;
  for (let _0x443f45 = 0; _0x443f45 < _0x2acefc; _0x443f45++) {
    _0x2af1ee = _0x2af1ee += Number((0, _0x2bf3fb.bd)(10, 50) / 100);
  }
  return Number(_0x2af1ee.toFixed(2));
}
_0x5a00e8.install = function _0x5d668d(_0x105891) {
  if (_0x5d668d.installed && _0x51d8e5 === _0x105891) {
    return;
  }
  _0x5d668d.installed = true;
  _0x51d8e5 = _0x105891;
  const _0xe4a993 = _0x1a0262 => _0x1a0262 !== undefined;
  _0x105891.mixin({
    beforeCreate() {
      if (_0xe4a993(this.$options.propsFunc)) {
        this._propsFuncRoot = this;
        this._propsFunc = this.$options.propsFunc;
        this._propsFunc.init(this);
      } else {
        this._propsFuncRoot = this.$parent && this.$parent._propsFuncRoot || this;
      }
    }
  });
  Object.defineProperty(_0x105891.prototype, "$propsFunc", {
    get() {
      return this._propsFuncRoot._propsFunc;
    }
  });
};
_0x5a00e8.version = "0.0.1";
class _0x4e205b {
  constructor() {
    this.defaultBabyConfig = {
      evo: 0,
      exp: 0,
      maxExp: 100,
      growth: 1,
      level: 1
    };
    this.defaultBasicAttrConfig = {
      maxHp: 60,
      maxMp: 20,
      atk: 10,
      def: 10,
      spd: 10
    };
  }
  init(_0x44ec36) {
    this.app = _0x44ec36;
  }
  createDefaultPets() {
    const _0x2b648d = ["金波姆", "绿波姆", "水波姆", "火波姆", "土波姆"];
    const _0x2fabe5 = [];
    for (let _0x2fb950 of _0x2b648d) {
      const _0x2469fe = _0x44fcd9.xS.find(_0x27b947 => _0x27b947.name === _0x2fb950);
      const _0x55fdd6 = _0x4d7c3f(_0x2469fe.magic);
      const _0x500664 = (0, _0x2bf3fb.X$)(this.defaultBabyConfig, this.defaultBasicAttrConfig, _0x2469fe, {
        id: (0, _0x2bf3fb.DU)(8),
        magic: _0x55fdd6,
        growth: _0x1d9886(_0x2469fe.rank)
      });
      _0x5619c0(_0x500664);
      _0x2fabe5.push(_0x500664);
    }
    return _0x2fabe5;
  }
  catchPet(_0x5d58a1, _0xe340ce) {
    const _0x3190e4 = _0x44fcd9.xS.find(_0x42fdae => _0x42fdae.figure === _0x5d58a1);
    const _0x14c4d2 = _0x4d7c3f(_0x3190e4.magic);
    const _0x8ea7a0 = (0, _0x2bf3fb.X$)(this.defaultBabyConfig, this.defaultBasicAttrConfig, _0x3190e4, {
      id: (0, _0x2bf3fb.DU)(8),
      magic: _0x14c4d2,
      growth: _0x1d9886(_0x3190e4.rank)
    });
    _0x5619c0(_0x8ea7a0);
    this.app.$store.commit("petModule/addPet", {
      pet: _0x8ea7a0,
      resolve: _0xe340ce,
      handle: "catchPet"
    });
  }
  addPetByEgg(_0x335a67, _0x269c7a) {
    const _0x2809b6 = _0x44fcd9.xS.find(_0x1734fe => _0x1734fe.name === _0x335a67.name.replace("之卵", ""));
    const _0x163edc = _0x4d7c3f(_0x2809b6.magic);
    const _0x4b3248 = (0, _0x2bf3fb.X$)(this.defaultBabyConfig, this.defaultBasicAttrConfig, _0x2809b6, {
      id: (0, _0x2bf3fb.DU)(8),
      magic: _0x163edc,
      growth: _0x1d9886(_0x2809b6.rank)
    });
    _0x5619c0(_0x4b3248);
    this.app.$store.commit("petModule/addPet", {
      pet: _0x4b3248,
      resolve: _0x269c7a,
      handle: "egg"
    });
  }
  petExpUpgrade(_0x5820e5) {
    const {
      totalPets: _0x5ad560,
      fightPetId: _0x373b50,
      curPetId: _0x1732e9
    } = this.app.$store.state.petModule;
    const _0x12158b = _0x5ad560.findIndex(_0x1fbc7e => _0x1fbc7e.id === (_0x5820e5 === "fightPet" ? _0x373b50 : _0x1732e9));
    const _0x8e587f = _0x5ad560[_0x12158b];
    if (_0x8e587f.exp < _0x8e587f.maxExp) {
      return;
    }
    while (_0x8e587f.exp >= _0x8e587f.maxExp) {
      if (_0x8e587f.level >= 100) {
        _0x8e587f.exp = _0x8e587f.maxExp;
        break;
      }
      _0x8e587f.level++;
      _0x8e587f.exp = _0x8e587f.exp - _0x8e587f.maxExp;
      _0x8e587f.maxExp = _0x44fcd9.jL[_0x8e587f.level - 1];
    }
    const _0x2855c5 = ["maxHp", "maxMp", "atk", "def", "spd"];
    for (let _0xe8ccf of _0x2855c5) {
      _0x8e587f[_0xe8ccf] = this.defaultBasicAttrConfig[_0xe8ccf];
    }
    _0x5619c0(_0x8e587f);
    _0x5ad560.splice(_0x12158b, 1, _0x8e587f);
  }
  petEvolution(_0x9b4f3b, _0x534642, _0x48dbe4) {
    const {
      totalPets: _0x59089c
    } = this.app.$store.state.petModule;
    const _0x5c6ced = _0x59089c.findIndex(_0x406568 => _0x406568.id === _0x534642);
    let _0x7bdde2 = _0x59089c[_0x5c6ced];
    let _0x1e8652 = _0x7bdde2.attribute === "神" ? 0.4 : 0.7;
    let _0x51ee60 = _0x7bdde2.attribute === "神" ? 0.8 : 1.5;
    const _0x10bfe0 = _0x9b4f3b === 0 ? (0, _0x2bf3fb.bd)(0.1, _0x1e8652, 100) : (0, _0x2bf3fb.bd)(0.5, _0x51ee60, 100);
    _0x7bdde2.growth += _0x10bfe0;
    _0x7bdde2.growth = Math.min(100, (_0x7bdde2.growth * 100).toFixed(0) / 100);
    _0x7bdde2.evo++;
    if (_0x7bdde2.name !== _0x48dbe4) {
      const _0x3069b7 = _0x44fcd9.xS.find(_0x16562c => _0x16562c.name === _0x48dbe4);
      for (let _0x5c9c4b in _0x3069b7) {
        if (_0x5c9c4b !== "magic") {
          _0x7bdde2[_0x5c9c4b] = _0x3069b7[_0x5c9c4b];
        }
      }
      for (let _0x55cd21 = 0; _0x55cd21 < _0x3069b7.magic.length; _0x55cd21++) {
        const _0x4c6ffa = _0x7bdde2.magic.find(_0x2b9da2 => _0x2b9da2.name === _0x3069b7.magic[_0x55cd21]);
        if (!_0x4c6ffa) {
          let _0x306502 = _0x44fcd9.jk.find(_0x9c1a4e => _0x9c1a4e.name === _0x3069b7.magic[_0x55cd21]);
          _0x306502 = _0x4d9b0d(_0x306502);
          _0x306502.rank = 1;
          _0x7bdde2.magic.splice(_0x55cd21, 0, _0x306502);
        }
      }
      _0x7bdde2.magic.length = _0x3069b7.magic.length;
    }
    const _0x21b5e7 = ["maxHp", "maxMp", "atk", "def", "spd"];
    for (let _0x4dc2d3 of _0x21b5e7) {
      _0x7bdde2[_0x4dc2d3] = this.defaultBasicAttrConfig[_0x4dc2d3];
    }
    _0x5619c0(_0x7bdde2);
    _0x59089c.splice(_0x5c6ced, 1, _0x7bdde2);
  }
  petGodlyEvolution(_0x2084c8) {
    const {
      totalPets: _0x49e3dd,
      curPetId: _0x35ad53
    } = this.app.$store.state.petModule;
    const _0xf13dfe = _0x49e3dd.findIndex(_0x354bae => _0x354bae.id === _0x35ad53);
    let _0x4a2435 = _0x49e3dd[_0xf13dfe];
    if (_0x4a2435.name !== _0x2084c8) {
      const _0x40443f = _0x44fcd9.xS.find(_0x40ce9f => _0x40ce9f.name === _0x2084c8);
      for (let _0x4019c8 in _0x40443f) {
        if (_0x4019c8 !== "magic") {
          _0x4a2435[_0x4019c8] = _0x40443f[_0x4019c8];
        }
      }
      for (let _0x36537c = 0; _0x36537c < _0x40443f.magic.length; _0x36537c++) {
        const _0x2f775b = _0x4a2435.magic.find(_0x23c8f1 => _0x23c8f1.name === _0x40443f.magic[_0x36537c]);
        if (!_0x2f775b) {
          let _0x114292 = _0x44fcd9.jk.find(_0x3b90b5 => _0x3b90b5.name === _0x40443f.magic[_0x36537c]);
          _0x114292 = _0x4d9b0d(_0x114292);
          _0x114292.rank = 1;
          _0x4a2435.magic.splice(_0x36537c, 0, _0x114292);
        }
      }
      _0x4a2435.magic.length = _0x40443f.magic.length;
    }
    _0x49e3dd.splice(_0xf13dfe, 1, _0x4a2435);
  }
  petSynthesis(_0x3111a4, _0x2c0b96, _0x3706b4, _0x2491ea) {
    function _0x29789d() {
      _0x505ff2.curPetsId = _0x505ff2.curPetsId.filter(_0x3f8f40 => _0x3f8f40 !== _0x3111a4[1].id);
      const _0x435f18 = _0x32eb5a.findIndex(_0x2d4993 => _0x2d4993.id === _0x3111a4[1].id);
      _0x32eb5a.splice(_0x435f18, 1);
    }
    function _0x3575d1() {
      let _0x311b2d = Number(_0x3111a4[1].growth) * 0.5 + Number(_0x3111a4[1].rank) * 0.1 + Number(_0x3111a4[1].level) * 0.03;
      _0x311b2d = _0x2c0b96.growthRate > 0 ? _0x311b2d * (1 + _0x2c0b96.growthRate) : _0x311b2d;
      return Math.min(100, Number((_0x311b2d + _0x3111a4[0].growth).toFixed(2)));
    }
    const _0x505ff2 = this.app.$store.state.petModule;
    const {
      totalPets: _0x32eb5a
    } = _0x505ff2;
    const _0x3e3540 = _0x44fcd9.t4.find(_0x3c5f97 => _0x3c5f97.name === _0x3111a4[0].name);
    if (!_0x3e3540) {
      _0x2491ea({
        status: "fail",
        message: _0x3111a4[0].name + "不能进行宠物合成！"
      });
      return;
    }
    _0x2c0b96.rarityRate += _0x3e3540.rarityRate;
    const _0x58ab2b = ["successRate", "rarityRate"];
    for (let _0x488a6b of _0x58ab2b) {
      _0x2c0b96[_0x488a6b] += Math.random(0, 1);
    }
    if (_0x2c0b96.successRate < 1) {
      if (!_0x2c0b96.isGuard) {
        _0x29789d();
      }
      _0x2491ea({
        status: "fail",
        message: "本次宠物合成失败！"
      });
      return;
    }
    const _0x599d27 = {
      level: 1,
      evo: 0,
      exp: 0,
      maxExp: 100,
      growth: _0x3575d1()
    };
    let _0x5409fc;
    if (_0x2c0b96.rarityRate >= 1) {
      if (_0x3e3540.special) {
        for (let _0x1241a8 = 0; _0x1241a8 < _0x3e3540.special.length; _0x1241a8++) {
          const _0x3baad4 = _0x3e3540.special[_0x1241a8];
          if (_0x3baad4.vicePetName && _0x3baad4.vicePetName.includes(_0x3111a4[1].name) && _0x2c0b96.rarityRate > _0x3baad4.rarityRate) {
            _0x5409fc = _0x44fcd9.xS.find(_0x5f1003 => _0x5f1003.name === _0x3baad4.next);
            break;
          }
          if (_0x3baad4.attribute && _0x3111a4[1].attribute === _0x3baad4.attribute && _0x2c0b96.rarityRate > _0x3baad4.rarityRate) {
            _0x5409fc = _0x44fcd9.xS.find(_0x2049d0 => _0x2049d0.name === _0x3baad4.next);
            break;
          }
          if (_0x3baad4.rank && _0x3111a4[1].rank === _0x3baad4.rank && _0x2c0b96.rarityRate > _0x3baad4.rarityRate) {
            _0x5409fc = _0x44fcd9.xS.find(_0xa6791c => _0xa6791c.name === _0x3baad4.next);
            break;
          }
        }
      }
      _0x5409fc ||= _0x44fcd9.xS.find(_0xb62888 => _0xb62888.name === _0x3e3540.next);
    } else {
      _0x5409fc = _0x44fcd9.xS.find(_0x410b7f => _0x410b7f.name === _0x3e3540.name);
    }
    _0x5409fc = _0x4d9b0d(_0x5409fc);
    _0x5409fc.magic = _0x4d7c3f(_0x5409fc.magic);
    if (_0x5409fc.attribute === "神" && _0x599d27.growth > 60) {
      _0x599d27.growth = Number(60);
    }
    _0x599d27.growth = Math.min(100, _0x599d27.growth);
    const _0x19b8e1 = (0, _0x2bf3fb.X$)(_0x3111a4[0], _0x5409fc, this.defaultBasicAttrConfig, _0x599d27);
    _0x5619c0(_0x19b8e1);
    const _0x390901 = _0x32eb5a.findIndex(_0x24f417 => _0x24f417.id === _0x3111a4[0].id);
    _0x32eb5a.splice(_0x390901, 1, _0x19b8e1);
    _0x29789d();
    _0x3706b4({
      status: "success",
      message: "恭喜您成功地合成了一只[" + _0x19b8e1.name + "]，真是太幸运了！"
    });
  }
  petNirvana(_0x29cbd0, _0x54a593, _0x1a59b2, _0x3e0d4c, _0x520767) {
    const _0x613128 = this.app.$store.state.petModule;
    const {
      totalPets: _0x2215e5
    } = _0x613128;
    const _0x460247 = _0x44fcd9.SP.find(_0x436b4e => _0x436b4e.name === _0x29cbd0[0].name);
    if (!_0x460247) {
      _0x520767({
        status: "fail",
        message: _0x29cbd0[0].name + "不能进行神宠转生！"
      });
      return;
    }
    function _0x1a9665() {
      _0x613128.curPetsId = _0x613128.curPetsId.filter(_0x4212b4 => _0x4212b4 !== _0x29cbd0[1].id);
      const _0x1deb18 = _0x2215e5.findIndex(_0x39772d => _0x39772d.id === _0x29cbd0[1].id);
      _0x2215e5.splice(_0x1deb18, 1);
    }
    function _0x496ced() {
      _0x613128.curPetsId = _0x613128.curPetsId.filter(_0x574ecb => _0x574ecb !== _0x54a593.id);
      const _0x5f292c = _0x2215e5.findIndex(_0x528e82 => _0x528e82.id === _0x54a593.id);
      _0x2215e5.splice(_0x5f292c, 1);
    }
    function _0x600425() {
      let _0x3121f6 = Number(_0x29cbd0[1].growth) * 0.5 + Number(_0x29cbd0[1].rank) * 0.1 + Number(_0x29cbd0[1].level) * 0.05;
      _0x3121f6 = _0x1a59b2.growthRate > 0 ? _0x3121f6 * (1 + _0x1a59b2.growthRate) : _0x3121f6;
      return Math.min(100, Number((_0x3121f6 + _0x29cbd0[0].growth).toFixed(2)));
    }
    const _0x4dfe98 = ["successRate"];
    for (let _0x330676 of _0x4dfe98) {
      _0x1a59b2[_0x330676] += Math.random(0, 1);
    }
    if (_0x1a59b2.successRate < 1) {
      if (!_0x1a59b2.isGuard) {
        _0x496ced();
      }
      _0x520767({
        status: "fail",
        message: "本次神宠转生失败！"
      });
      return;
    }
    const _0x2777c7 = {
      level: 1,
      evo: 0,
      exp: 0,
      maxExp: 100,
      growth: _0x600425()
    };
    let _0x18c253;
    if (_0x460247.special) {
      for (let _0x3f253d = 0; _0x3f253d < _0x460247.special.length; _0x3f253d++) {
        const _0xf4a139 = _0x460247.special[_0x3f253d];
        if (_0xf4a139.vicePetName && _0x29cbd0[1].name === _0xf4a139.vicePetName) {
          _0x18c253 = _0x44fcd9.xS.find(_0x127be1 => _0x127be1.name === _0xf4a139.next);
          break;
        }
      }
    }
    _0x18c253 ||= _0x44fcd9.xS.find(_0x18807a => _0x18807a.name === (_0x460247.next || _0x460247.name));
    _0x18c253 = _0x4d9b0d(_0x18c253);
    _0x18c253.magic = _0x4d7c3f(_0x18c253.magic);
    _0x2777c7.growth = Math.min(100, _0x2777c7.growth);
    const _0x37d911 = (0, _0x2bf3fb.X$)(_0x29cbd0[0], _0x18c253, this.defaultBasicAttrConfig, _0x2777c7);
    _0x5619c0(_0x37d911);
    const _0x5d764a = _0x2215e5.findIndex(_0x4591d2 => _0x4591d2.id === _0x29cbd0[0].id);
    _0x2215e5.splice(_0x5d764a, 1, _0x37d911);
    _0x1a9665();
    _0x496ced();
    _0x3e0d4c({
      status: "success",
      message: "您的的宝宝经过圣洁的洗礼，成功的转世成为[" + _0x37d911.name + "]!"
    });
  }
  petMagicRefresh(_0x49f099) {
    const _0x5a149a = this.app.$store.state.petModule.totalPets;
    for (let _0x4764b6 = 0; _0x4764b6 < _0x5a149a.length; _0x4764b6++) {
      const _0x45a354 = _0x5a149a[_0x4764b6];
      if (!_0x49f099.includes(_0x45a354.name)) {
        continue;
      }
      const _0x454be2 = _0x44fcd9.xS.find(_0x2f58bb => _0x2f58bb.name === _0x45a354.name);
      for (let _0x193933 = 1; _0x193933 < _0x454be2.magic.length; _0x193933++) {
        let _0x8f3b8a = _0x44fcd9.jk.find(_0x20f601 => _0x20f601.name === _0x454be2.magic[_0x193933]);
        _0x8f3b8a = _0x4d9b0d(_0x8f3b8a);
        _0x8f3b8a.rank = 1;
        if (_0x45a354.magic[_0x193933]) {
          _0x45a354.magic.splice(_0x193933, 1, _0x8f3b8a);
        } else {
          _0x45a354.magic.splice(_0x193933, 0, _0x8f3b8a);
        }
      }
      _0x45a354.magic.length = _0x454be2.magic.length;
    }
    this.app.$store.state.petModule.totalPets = _0x5a149a;
  }
  petRankRefresh(_0x532265) {
    const _0x2cc61f = this.app.$store.state.petModule.totalPets;
    for (let _0x5a16b5 = 0; _0x5a16b5 < _0x2cc61f.length; _0x5a16b5++) {
      const _0x52b2fc = _0x2cc61f[_0x5a16b5];
      if (!_0x532265.includes(_0x52b2fc.name)) {
        continue;
      }
      const _0x133e9f = _0x44fcd9.xS.find(_0x314478 => _0x314478.name === _0x52b2fc.name);
      _0x52b2fc.rank = _0x133e9f.rank;
    }
    this.app.$store.state.petModule.totalPets = _0x2cc61f;
  }
}
_0x4e205b.install = function _0x748a2f(_0x597f0c) {
  if (_0x748a2f.installed) {
    return;
  }
  _0x748a2f.installed = true;
  const _0x30c512 = _0x4e8833 => _0x4e8833 !== undefined;
  _0x597f0c.mixin({
    beforeCreate() {
      if (_0x30c512(this.$options.petFunc)) {
        this._petFuncRoot = this;
        this._petFunc = this.$options.petFunc;
        this._petFunc.init(this);
      } else {
        this._petFuncRoot = this.$parent && this.$parent._petFuncRoot || this;
      }
    }
  });
  Object.defineProperty(_0x597f0c.prototype, "$petFunc", {
    get() {
      return this._petFuncRoot._petFunc;
    }
  });
};
_0x4e205b.version = "0.0.1";
var _0x30bdee = require("./15653.js");
class _0xbae99e {
  static setItem(_0x55f26c, _0x16031f, _0x200a05) {
    if (_0x200a05 && _0x16031f === null) {
      return;
    }
    const _0x175fa7 = JSON.stringify(_0x16031f);
    const _0x45b482 = _0x200a05 ? _0x16031f : (0, _0x30bdee.ff)(_0x175fa7).toString();
    const _0x59d116 = _0x200a05 ? _0x55f26c : (0, _0x30bdee.d5)(_0x55f26c);
    window.localStorage.setItem(_0x59d116, _0x45b482);
  }
  static getItem(_0x17f7b9) {
    const _0x62a8f8 = (0, _0x30bdee.d5)(_0x17f7b9);
    const _0x197b52 = window.localStorage.getItem(_0x62a8f8);
    if (!_0x197b52) {
      return null;
    }
    const _0x4b69c9 = (0, _0x30bdee.F6)(_0x197b52);
    return _0x4b69c9;
  }
  static removeItem(_0x15b253) {
    window.localStorage.removeItem(_0x15b253.toString());
  }
  static clearAll() {
    window.localStorage.clear();
  }
  static getEncryptItem(_0x50c43f) {
    const _0x349be1 = (0, _0x30bdee.d5)(_0x50c43f);
    const _0x4cc371 = window.localStorage.getItem(_0x349be1);
    if (_0x4cc371) {
      return [_0x349be1, _0x4cc371];
    } else {
      return [_0x349be1, null];
    }
  }
  static getAll() {
    const _0x2fbaee = ["wornEquipments", "playerAsset", "packageDetail", "storeDetail", "totalPets", "curPetsId", "fightPetId", "pastureMaxCapacity", "acceptedMissions", "finishedMissions", "dungeonsDetail", "gameVersion", "medalProgress"];
    const _0x3169a2 = [];
    for (let _0xbbaac1 of _0x2fbaee) {
      _0x3169a2.push(..._0xbae99e.getEncryptItem(_0xbbaac1));
    }
    return _0x3169a2;
  }
  static setAll(_0x1f5da0) {
    for (let _0x487154 = 0; _0x487154 < _0x1f5da0.length - 1; _0x487154 += 2) {
      _0xbae99e.setItem(_0x1f5da0[_0x487154], _0x1f5da0[_0x487154 + 1], true);
    }
  }
}
function _0xe46adc() {}
_0xbae99e.install = _0x248f6e => {
  _0x248f6e.prototype.$gameLocalStorage = _0xbae99e;
  _0x248f6e.$gameLocalStorage = _0xbae99e;
};
_0xbae99e.version = "0.0.1";
let _0x283c35 = null;
const _0xaced75 = {};
function _0x2b230d(_0x2fda16, ..._0x5456fa) {
  try {
    return _0x2fda16(..._0x5456fa);
  } catch (_0x474d4b) {
    _0x283c35 = _0x474d4b;
    return _0xaced75;
  }
}
function _0x56add1(_0x33ccba) {
  try {
    return _0x33ccba.then;
  } catch (_0x1aa081) {
    _0x283c35 = _0x1aa081;
    return _0xaced75;
  }
}
function _0x5b3380(_0x2cb96d) {
  if (typeof this !== "object") {
    throw new Error("SSPromise 必须通过new调用！");
  }
  if (typeof _0x2cb96d !== "function") {
    throw new Error("SSPromise构造函数的参数必须为函数类型!");
  }
  this._state = 0;
  this._value = null;
  this._deferredState = 0;
  this._deferreds = null;
  if (_0x2cb96d !== _0xe46adc) {
    _0x5c5d2d(_0x2cb96d, this);
  }
}
function _0x404c60(_0x830d5a, _0x55dd25) {
  if (_0x830d5a._state == 0) {
    if (_0x830d5a._deferredState === 0) {
      _0x830d5a._deferredState = 1;
      _0x830d5a._deferreds = _0x55dd25;
      return;
    } else if (_0x830d5a._deferredState === 1) {
      _0x830d5a._deferredState = 2;
      _0x830d5a._deferreds = [_0x830d5a._deferreds, _0x55dd25];
      return;
    } else {
      _0x830d5a._deferreds.push(_0x55dd25);
      return;
    }
  }
  _0x22e5f8(_0x830d5a, _0x55dd25);
}
function _0x22e5f8(_0x7325d5, _0x1c970d) {
  (function () {
    const _0x3772de = _0x7325d5._state === 1 ? _0x1c970d.onFulfilled : _0x1c970d.onRejected;
    if (_0x3772de === null) {
      if (_0x7325d5._state === 1) {
        _0x29ff39(_0x1c970d.sspromise, _0x7325d5._value);
      } else {
        _0x3c050a(_0x1c970d.sspromise, _0x7325d5._value);
      }
      return;
    }
    const _0x4bd50a = _0x2b230d(_0x3772de, _0x7325d5._value);
    if (_0x4bd50a === _0xaced75) {
      _0x3c050a(_0x1c970d.sspromise, _0x283c35);
    } else {
      _0x29ff39(_0x1c970d.sspromise, _0x4bd50a);
    }
  })();
}
function _0x3a5376(_0x13d720, _0x298ba1, _0x56f654) {
  this.onFulfilled = typeof _0x13d720 === "function" ? _0x13d720 : null;
  this.onRejected = typeof _0x298ba1 === "function" ? _0x298ba1 : null;
  this.sspromise = _0x56f654;
}
function _0x3e22f4(_0x1287cd) {
  if (_0x1287cd._deferredState === 1) {
    _0x404c60(_0x1287cd, _0x1287cd._deferreds);
    _0x1287cd._deferreds = null;
  }
  if (_0x1287cd._deferredState === 2) {
    for (var _0xf181b4 = 0; _0xf181b4 < _0x1287cd._deferreds.length; _0xf181b4++) {
      _0x404c60(_0x1287cd, _0x1287cd._deferreds[_0xf181b4]);
    }
    _0x1287cd._deferreds = null;
  }
}
function _0x29ff39(_0x8ff379, _0x215837) {
  if (_0x215837 === _0x8ff379 || _0x215837 instanceof _0x5b3380) {
    return _0x3c050a(_0x8ff379, new TypeError("SSPromise实例 resolve value 不能为本身或其他SSPromise实例！"));
  }
  if (_0x215837 && (typeof _0x215837 === "object" || typeof _0x215837 === "function")) {
    const _0x57004a = _0x56add1(_0x215837);
    if (_0x57004a === _0xaced75) {
      return _0x3c050a(_0x8ff379, _0x283c35);
    }
    if (_0x57004a) {
      return _0x3c050a(_0x8ff379, new TypeError("SSPromise实例 resolve value 不能为thenable！"));
    }
  }
  _0x8ff379._state = 1;
  _0x8ff379._value = _0x215837;
  _0x3e22f4(_0x8ff379);
}
function _0x3c050a(_0x283d23, _0x3dc93d) {
  _0x283d23._state = 2;
  _0x283d23._value = _0x3dc93d;
  _0x3e22f4(_0x283d23);
}
function _0x5c5d2d(_0x38ffab, _0x388dd0) {
  let _0x56bc90 = this;
  const _0x2e0b91 = _0x2b230d(_0x38ffab, function (_0x2eb65b) {
    if (!_0x56bc90) {
      _0x56bc90 = true;
      _0x29ff39(_0x388dd0, _0x2eb65b);
    }
  }, function (_0x48772c) {
    if (!_0x56bc90) {
      _0x56bc90 = true;
      _0x3c050a(_0x388dd0, _0x48772c);
    }
  });
  if (!_0x56bc90 && _0x2e0b91 === _0xaced75) {
    _0x56bc90 = true;
    _0x3c050a(_0x388dd0, _0x283c35);
  }
}
function _0x1b5ccf(_0x55b022) {
  var _0x8a26c8 = new _0x5b3380(_0x5b3380._noop);
  _0x8a26c8._state = 1;
  _0x8a26c8._value = _0x55b022;
  return _0x8a26c8;
}
_0x5b3380._noop = _0xe46adc;
_0x5b3380.prototype.then = function (_0x3c1327, _0x3c5980) {
  if (this.constructor !== _0x5b3380) {
    throw new Error("请通过SSPromise实例调用then方法，不要通过call, apply此类方法进行调用！");
  }
  const _0x1afdb2 = new _0x5b3380(_0xe46adc);
  _0x404c60(this, new _0x3a5376(_0x3c1327, _0x3c5980, _0x1afdb2));
  return _0x1afdb2;
};
_0x5b3380.prototype.catch = function (_0x4163ee) {
  return this.then(null, _0x4163ee);
};
_0x5b3380.prototype.finally = function (_0x4f47ca) {
  return this.then(function (_0x357b9a) {
    return new _0x5b3380(_0x5e9528 => {
      _0x5e9528(_0x4f47ca());
    }).then(function () {
      return _0x357b9a;
    });
  }, function (_0x1d13a5) {
    return new _0x5b3380(_0x42f8be => {
      _0x42f8be(_0x4f47ca());
    }).then(function () {
      throw _0x1d13a5;
    });
  });
};
const _0xc2b011 = _0x1b5ccf(true);
const _0x31f979 = _0x1b5ccf(false);
const _0x3338de = _0x1b5ccf(null);
const _0xe768d = _0x1b5ccf(undefined);
const _0xc91aa4 = _0x1b5ccf(0);
const _0x5a7581 = _0x1b5ccf("");
_0x5b3380.resolve = function (_0x11dfef) {
  if (_0x11dfef instanceof _0x5b3380) {
    return _0x11dfef;
  }
  if (_0x11dfef === null) {
    return _0x3338de;
  }
  if (_0x11dfef === undefined) {
    return _0xe768d;
  }
  if (_0x11dfef === true) {
    return _0xc2b011;
  }
  if (_0x11dfef === false) {
    return _0x31f979;
  }
  if (_0x11dfef === 0) {
    return _0xc91aa4;
  }
  if (_0x11dfef === "") {
    return _0x5a7581;
  }
  if (typeof _0x11dfef === "object" || typeof _0x11dfef === "function") {
    try {
      var _0x4df70b = _0x11dfef.then;
      if (typeof _0x4df70b === "function") {
        return new _0x5b3380(_0x4df70b.bind(_0x11dfef));
      }
    } catch (_0x699f70) {
      return new _0x5b3380(function (_0x3324e7, _0x5037c5) {
        _0x5037c5(_0x699f70);
      });
    }
  }
  return _0x1b5ccf(_0x11dfef);
};
let _0x2dc814 = function (_0x6826bd) {
  if (typeof Array.from === "function") {
    _0x2dc814 = Array.from;
    return Array.from(_0x6826bd);
  } else {
    _0x2dc814 = function (_0x1b47f8) {
      return Array.prototype.slice.call(_0x1b47f8);
    };
    return Array.prototype.slice.call(_0x6826bd);
  }
};
_0x5b3380.all = function (_0x1b7bf0) {
  return new _0x5b3380(function (_0x30f2b3, _0x1af5ea) {
    var _0x1b82cd = _0x2dc814(_0x1b7bf0);
    var _0x5a1952 = [];
    var _0x2ce55a = 0;
    if (_0x1b82cd.length === 0) {
      _0x30f2b3([]);
    } else {
      _0x1b82cd.forEach(function (_0x3756ed, _0x1928cb) {
        _0x5b3380.resolve(_0x3756ed).then(function (_0x55a324) {
          _0x5a1952[_0x1928cb] = _0x55a324;
          _0x2ce55a++;
          if (_0x2ce55a === _0x1b82cd.length) {
            _0x30f2b3(_0x5a1952);
          }
        }, function (_0x1f9dc7) {
          _0x1af5ea(_0x1f9dc7);
        });
      });
    }
  });
};
_0x5b3380.version = "0.0.1";
_0x5b3380.install = function () {
  window.SSPromise ||= _0x5b3380;
};
var _0x471bb3 = _0x5b3380;
function _0x474032() {
  var _0x2ad87c = this;
  var _0x23e1dd = _0x2ad87c._self._c;
  if (_0x2ad87c.petDetail) {
    return _0x23e1dd("div", {
      class: ["pet-show", this.sceneClass]
    }, [_0x23e1dd("div", {
      staticClass: "pet-show__figure"
    }, [_0x23e1dd("img", {
      attrs: {
        src: require("./65637.js")("./" + this.petDetail.figure + ".gif")
      }
    })]), _0x23e1dd("div", {
      staticClass: "pet-show__name"
    }, [_0x2ad87c._v(_0x2ad87c._s(_0x2ad87c.petDetail.name))]), _0x23e1dd("ul", {
      staticClass: "pet-show__detail"
    }, [_0x23e1dd("li", [_0x2ad87c._v("等级：" + _0x2ad87c._s(_0x2ad87c.petDetail.level))]), _0x23e1dd("li", [_0x2ad87c._v("五行：" + _0x2ad87c._s(_0x2ad87c.petDetail.attribute))]), _0x23e1dd("li", [_0x2ad87c._v("生命：" + _0x2ad87c._s(_0x2ad87c.petDetail.maxHp))]), _0x23e1dd("li", [_0x2ad87c._v("魔法：" + _0x2ad87c._s(_0x2ad87c.petDetail.maxMp))]), _0x23e1dd("li", [_0x2ad87c._v("攻击：" + _0x2ad87c._s(_0x2ad87c.petDetail.atk))]), _0x23e1dd("li", [_0x2ad87c._v("防御：" + _0x2ad87c._s(_0x2ad87c.petDetail.def))]), _0x23e1dd("li", [_0x2ad87c._v("速度：" + _0x2ad87c._s(_0x2ad87c.petDetail.spd))]), _0x23e1dd("li", [_0x2ad87c._v("成长：" + _0x2ad87c._s(_0x2ad87c.petDetail.growth))]), _0x23e1dd("li", [_0x2ad87c._v("阶数：" + _0x2ad87c._s(_0x2ad87c.petDetail.rank))])])]);
  } else {
    return _0x2ad87c._e();
  }
}
var _0x126e36 = [];
var _0x517d34 = {
  name: "PetShow",
  props: ["petDetail", "sceneClass"]
};
var _0x1187a3 = _0x517d34;
var _0x33e30f = (0, _0x4f33e3.A)(_0x1187a3, _0x474032, _0x126e36, false, null, null, null);
var _0x49f7f1 = _0x33e30f.exports;
function _0x2d7f8a() {
  var _0x90e981 = this;
  var _0x5609db = _0x90e981._self._c;
  if (_0x90e981.propDetailConfig.visable) {
    return _0x5609db("div", {
      staticClass: "prop-detail",
      style: _0x90e981.propDetailStyle
    }, [_0x5609db("div", {
      staticClass: "prop-detail__top"
    }, _0x90e981._l(3, function (_0x53b6ca) {
      return _0x5609db("div", {
        key: "" + _0x53b6ca
      });
    }), 0), _0x5609db("div", {
      staticClass: "prop-detail__context"
    }, [_0x5609db("div", {
      staticClass: "border-l"
    }), _0x5609db("ul", [_0x5609db("li", {
      class: _0x90e981.prop.level
    }, [_0x90e981._v(" " + _0x90e981._s(_0x90e981.prop.name)), _0x90e981.prop.enhancementLevel ? _0x5609db("span", [_0x90e981._v(" +" + _0x90e981._s(_0x90e981.prop.enhancementLevel))]) : _0x90e981._e()]), _0x90e981._l(_0x90e981.prop.description, function (_0x1f852a, _0x16278d) {
      return _0x5609db("li", {
        key: "" + _0x16278d,
        domProps: {
          innerHTML: _0x90e981._s(_0x1f852a)
        }
      });
    })], 2), _0x5609db("div", {
      staticClass: "border-r"
    })]), _0x5609db("div", {
      staticClass: "prop-detail__bottom"
    }, _0x90e981._l(3, function (_0x53c362) {
      return _0x5609db("div", {
        key: "" + _0x53c362
      });
    }), 0)]);
  } else {
    return _0x90e981._e();
  }
}
var _0x275340 = [];
var _0x13b233 = {
  name: "PropDetail",
  props: ["prop", "propDetailConfig"],
  computed: {
    propDetailStyle() {
      return {
        left: this.propDetailConfig.left + "px",
        top: this.propDetailConfig.top + "px"
      };
    }
  }
};
var _0x4f4ccf = _0x13b233;
var _0x5432b1 = (0, _0x4f33e3.A)(_0x4f4ccf, _0x2d7f8a, _0x275340, false, null, null, null);
var _0x5b3686 = _0x5432b1.exports;
function _0x1738b5() {
  var _0x319d28 = this;
  var _0x2a1651 = _0x319d28._self._c;
  return _0x2a1651("div", {
    staticClass: "package-prop-detail"
  }, [_0x2a1651("prop-detail", {
    attrs: {
      prop: _0x319d28.showProp,
      propDetailConfig: _0x319d28.propDetailConfig
    }
  }), _0x2a1651("div", {
    staticClass: "package-prop-title"
  }, [_0x2a1651("img", {
    attrs: {
      src: _0x319d28.packagePropDetailTitleImage
    }
  })]), _0x2a1651("div", {
    staticClass: "package-prop-context"
  }, [_0x2a1651("ul", {
    staticClass: "package-prop-context__header"
  }, [_0x2a1651("li", [_0x319d28._v("名称")]), _0x319d28.curSceneConfig.name === "groceryStore" ? [_0x2a1651("li", {
    staticClass: "price"
  }, [_0x319d28._v("价格")])] : _0x319d28._e(), _0x2a1651("li", [_0x319d28._v("数量")])], 2), _0x2a1651("ul", {
    class: ["package-prop-context__props", "store-package-props"]
  }, _0x319d28._l(_0x319d28.packageDetail.packageProps, function (_0x212c37) {
    return _0x2a1651("li", {
      key: _0x212c37.rand,
      class: _0x319d28.getPropClass(_0x212c37),
      on: {
        mouseenter: function (_0x50320a) {
          return _0x319d28.propMouseEnter(_0x212c37);
        },
        mouseleave: _0x319d28.propMouseLeave,
        click: function (_0x358b9a) {
          return _0x319d28.packagePropClick(_0x212c37);
        }
      }
    }, [_0x2a1651("div", {
      class: _0x319d28.getPropNameClass
    }, [_0x2a1651("img", {
      attrs: {
        src: require("./37702.js")("./" + _0x212c37.type + ".gif")
      }
    }), _0x319d28._v(_0x319d28._s(_0x212c37.name) + " ")]), _0x319d28.curSceneConfig.name === "groceryStore" ? [_0x2a1651("div", {
      staticClass: "package-prop__price"
    }, [_0x319d28._v(" " + _0x319d28._s(_0x212c37.price) + " ")])] : _0x319d28._e(), _0x2a1651("div", {
      staticClass: "package-prop__num"
    }, [_0x319d28._v(_0x319d28._s(_0x212c37.num))])], 2);
  }), 0)]), _0x2a1651("div", {
    staticClass: "package-prop-footer"
  }, [_0x2a1651("div", {
    staticClass: "package-prop-footer__text"
  }, [_0x319d28._v(" 背包空间：" + _0x319d28._s(_0x319d28.packageDetail.packageProps.length) + "/" + _0x319d28._s(_0x319d28.packageDetail.maxCapacity) + " ")]), _0x319d28._t("btns")], 2)], 1);
}
var _0x217956 = [];
var _0x1e8f3e = {
  name: "PackagePropDetail",
  props: ["curSceneConfig", "curPackageProp"],
  model: {
    prop: "curPackageProp",
    event: "package-prop-click"
  },
  data() {
    return {
      isPropDetail: false,
      showProp: null,
      packagePropDetailTitleImage: require("./7832.js"),
      packageCapacity: ""
    };
  },
  computed: {
    packageDetail() {
      return this.$store.state.playerModule.packageDetail;
    },
    propDetailConfig() {
      return {
        left: -180,
        top: 40,
        visable: this.isPropDetail
      };
    },
    getPropNameClass() {
      return ["package-prop__name", this.curSceneConfig.name === "groceryStore" ? "grocery-store" : ""];
    }
  },
  methods: {
    propMouseEnter(_0x482286) {
      this.showProp = _0x482286;
      this.isPropDetail = true;
    },
    propMouseLeave() {
      this.showProp = null;
      this.isPropDetail = false;
    },
    packagePropClick(_0x2ce9f9) {
      this.$emit("package-prop-click", this.curPackageProp === _0x2ce9f9 ? null : _0x2ce9f9);
    },
    getPropClass(_0x4d303a) {
      return {
        active: this.curPackageProp === _0x4d303a
      };
    }
  }
};
var _0x3c953f = _0x1e8f3e;
var _0x19224c = (0, _0x4f33e3.A)(_0x3c953f, _0x1738b5, _0x217956, false, null, null, null);
var _0x2a74fd = _0x19224c.exports;
function _0x335ad9() {
  var _0x5d3b65 = this;
  var _0x1c3b60 = _0x5d3b65._self._c;
  if (_0x5d3b65.magicDetailConfig.visable) {
    return _0x1c3b60("div", {
      staticClass: "magic-detail",
      style: _0x5d3b65.magicDetailStyle
    }, [_0x1c3b60("div", {
      staticClass: "magic-detail__top"
    }, _0x5d3b65._l(3, function (_0x566cbb) {
      return _0x1c3b60("div", {
        key: "" + _0x566cbb
      });
    }), 0), _0x1c3b60("div", {
      staticClass: "magic-detail__context"
    }, [_0x1c3b60("div", {
      staticClass: "border-l"
    }), _0x1c3b60("ul", _0x5d3b65._l(_0x5d3b65.magic, function (_0x50fd5d, _0x491885) {
      return _0x1c3b60("li", {
        key: "" + _0x491885
      }, [_0x5d3b65._v(" " + _0x5d3b65._s(_0x50fd5d) + " ")]);
    }), 0), _0x1c3b60("div", {
      staticClass: "border-r"
    })]), _0x1c3b60("div", {
      staticClass: "magic-detail__bottom"
    }, _0x5d3b65._l(3, function (_0x40b473) {
      return _0x1c3b60("div", {
        key: "" + _0x40b473
      });
    }), 0)]);
  } else {
    return _0x5d3b65._e();
  }
}
var _0x554186 = [];
var _0x1efff3 = {
  name: "MagicDetail",
  props: ["magic", "magicDetailConfig"],
  computed: {
    magicDetailStyle() {
      return {
        left: this.magicDetailConfig.left + "px",
        top: this.magicDetailConfig.top + "px"
      };
    }
  }
};
var _0x350242 = _0x1efff3;
var _0xb1098c = (0, _0x4f33e3.A)(_0x350242, _0x335ad9, _0x554186, false, null, null, null);
var _0x44cd19 = _0xb1098c.exports;
(0, _0x5cba6d.T)({
  redirect: "http://127.0.0.1:12000/docs/"
});
const _0x5e03b3 = new _0x5a00e8();
const _0x29dd9c = new _0x4e205b();
_0x5df579.Ay.config.productionTip = false;
_0x5df579.Ay.use(_0x321ed6);
_0x5df579.Ay.use(_0x10d8b4);
_0x5df579.Ay.use(_0x4790be);
_0x5df579.Ay.use(_0xfd3ceb);
_0x5df579.Ay.use(_0x4a96b3);
_0x5df579.Ay.use(_0x5a00e8);
_0x5df579.Ay.use(_0xbae99e);
_0x5df579.Ay.use(_0x4e205b);
_0x5df579.Ay.use(_0x471bb3);
_0x5df579.Ay.component("PetShow", _0x49f7f1);
_0x5df579.Ay.component("PropDetail", _0x5b3686);
_0x5df579.Ay.component("PackagePropDetail", _0x2a74fd);
_0x5df579.Ay.component("MagicDetail", _0x44cd19);
if (navigator.virtualKeyboard) {
  navigator.virtualKeyboard.overlaysContent = true;
}
new _0x5df579.Ay({
  render: _0x1f90e4 => _0x1f90e4(_0x566bf6),
  store: _0x37994b,
  router: _0x4e4ad8,
  propsFunc: _0x5e03b3,
  petFunc: _0x29dd9c
}).$mount("#app");