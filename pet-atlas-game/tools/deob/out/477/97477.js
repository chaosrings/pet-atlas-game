require.d(exports, {
  default: function () {
    return _0x91944;
  }
});
function _0x2cc076() {
  var _0x4b2460 = this;
  var _0x39ee72 = _0x4b2460._self._c;
  return _0x39ee72("div", {
    class: _0x4b2460.wildAdvanceClass
  }, [_0x4b2460.location ? [_0x39ee72(_0x4b2460.hyphenate(_0x4b2460.location), {
    tag: "component",
    attrs: {
      sceneDetail: _0x4b2460.sceneDetail
    },
    on: {
      "scene-change": _0x4b2460.sceneChange
    }
  })] : _0x4b2460._e(), _0x39ee72("div", {
    class: _0x4b2460.btnUpClass,
    on: {
      click: function (_0x57a8ea) {
        return _0x4b2460.arrClick(_0x4b2460.wildCur.sort);
      }
    }
  }), _0x4b2460._l(_0x4b2460.curSceneList, function (_0x7acc62) {
    return _0x39ee72("div", {
      key: _0x7acc62.name,
      class: _0x7acc62.klass,
      on: {
        click: function (_0x42011d) {
          return _0x4b2460.sceneClick(_0x7acc62);
        }
      }
    }, [_0x7acc62.entry ? _0x39ee72("img", {
      attrs: {
        src: require("./70451.js")("./" + _0x7acc62.entry + ".png")
      }
    }) : _0x4b2460._e()]);
  })], 2);
}
var _0x59ed0f = [];
import * as _0x56ed16 from /*webcrack:missing*/"./72321.js";
import * as _0x115454 from /*webcrack:missing*/"./59390.js";
function _0x16cc57() {
  var _0x16e8a8 = this;
  var _0x12e729 = _0x16e8a8._self._c;
  return _0x12e729("div", {
    staticClass: "wild-arm"
  }, [_0x16e8a8.sceneDetail.type === "dungeon" ? [_0x12e729("div", {
    staticClass: "dungeon"
  }, [_0x12e729("div", {
    staticClass: "bg-left"
  }, [_0x12e729("div", {
    staticClass: "card"
  }, [_0x12e729("div", {
    class: ["card__title", _0x16e8a8.sceneDetail.title ? _0x16e8a8.sceneDetail.title : ""]
  }), _0x12e729("div", {
    staticClass: "card__fill"
  }), _0x12e729("div", {
    staticClass: "card__back",
    on: {
      click: function (_0x8f7961) {
        return _0x16e8a8.$emit("scene-change", "leave");
      }
    }
  }), _0x12e729("div", {
    staticClass: "card__description"
  }, [_0x12e729("div", {
    staticClass: "card__description--text"
  }, [_0x16e8a8._v(" " + _0x16e8a8._s(_0x16e8a8.sceneDetail.description) + " ")])]), _0x12e729("div", {
    staticClass: "card__footer"
  })]), _0x12e729("div", {
    staticClass: "content"
  }, [_0x12e729("div", {
    staticClass: "pets__header"
  }), _0x12e729("div", {
    staticClass: "pets"
  }, [_0x12e729("div", {
    staticClass: "pets__detail"
  }, _0x16e8a8._l(_0x16e8a8.curPets, function (_0x325599) {
    return _0x12e729("div", {
      key: _0x325599.id,
      class: _0x325599.id === _0x16e8a8.fightPetId ? "active" : "",
      on: {
        click: function (_0x24c0c9) {
          return _0x16e8a8.changeFightPet(_0x325599.id);
        }
      }
    }, [_0x12e729("span", [_0x16e8a8._v(_0x16e8a8._s(_0x325599.name)), _0x12e729("br"), _0x16e8a8._v("LV " + _0x16e8a8._s(_0x325599.level))]), _0x12e729("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./63632.js")("./" + _0x325599.figure + ".gif")
      }
    }), _0x325599.id === _0x16e8a8.fightPetId ? _0x12e729("div", {
      staticClass: "battle-pet"
    }, [_0x16e8a8._v(" 出战 ")]) : _0x16e8a8._e()]);
  }), 0)]), _0x12e729("div", {
    staticClass: "message"
  }, [_0x12e729("div", {
    staticClass: "message__header"
  }), _0x12e729("ul", {
    staticClass: "message__text"
  }, [_0x12e729("li", [_0x16e8a8._v(" 副本开启倒计时：" + _0x16e8a8._s(_0x16e8a8.dungeonDetail.isCompleted ? "已完成(第二天开启)" : "已开启") + " ")]), _0x12e729("li", [_0x16e8a8._v(_0x16e8a8._s(_0x16e8a8.sceneDetail.recommand))]), _0x12e729("li", [_0x16e8a8._v("怪物总数：" + _0x16e8a8._s(_0x16e8a8.dungeonDetail.totalNum))]), _0x12e729("li", [_0x16e8a8._v("当前进度：" + _0x16e8a8._s(_0x16e8a8.dungeonDetail.curNum))]), _0x12e729("li", [_0x16e8a8._v(" 即将面对的宠物：" + _0x16e8a8._s(_0x16e8a8.sceneDetail.monsters[_0x16e8a8.dungeonDetail.curNum - 1]) + " ")])])])])]), _0x12e729("div", {
    staticClass: "border"
  }), _0x12e729("div", {
    staticClass: "bg-right"
  }, [_0x12e729("div", {
    staticClass: "header"
  }), _0x12e729("div", {
    staticClass: "footer"
  }, [_0x12e729("div", {
    staticClass: "footer__battle",
    on: {
      click: _0x16e8a8.handleBattleClick
    }
  }), _0x12e729("div", {
    staticClass: "footer__back",
    on: {
      click: function (_0x39f7a0) {
        return _0x16e8a8.$emit("scene-change", "leave");
      }
    }
  })])])])] : [_0x12e729("div", {
    staticClass: "routine"
  }, [_0x12e729("div", {
    staticClass: "bg-left"
  }, [_0x12e729("div", {
    staticClass: "btn--back",
    on: {
      click: function (_0x400c5b) {
        return _0x16e8a8.$emit("scene-change", "leave");
      }
    }
  }), _0x12e729("div", {
    staticClass: "wild-map-detail"
  }, [_0x12e729("div", [_0x16e8a8._v(_0x16e8a8._s("探险 - " + _0x16e8a8.sceneDetail.name))]), _0x12e729("div", [_0x16e8a8._v(_0x16e8a8._s(_0x16e8a8.sceneDetail.rewardDescription))]), _0x12e729("div", [_0x16e8a8._v(_0x16e8a8._s(_0x16e8a8.sceneDetail.description))]), _0x12e729("div", [_0x16e8a8._v(_0x16e8a8._s(_0x16e8a8.sceneDetail.recommand))])]), _0x12e729("div", {
    staticClass: "pets"
  }, _0x16e8a8._l(_0x16e8a8.curPets, function (_0xc0f6c9) {
    return _0x12e729("div", {
      key: _0xc0f6c9.id,
      class: _0xc0f6c9.id === _0x16e8a8.fightPetId ? "active" : "",
      on: {
        click: function (_0x40b17b) {
          return _0x16e8a8.changeFightPet(_0xc0f6c9.id);
        }
      }
    }, [_0x12e729("span", [_0x16e8a8._v(_0x16e8a8._s(_0xc0f6c9.name)), _0x12e729("br"), _0x16e8a8._v("LV " + _0x16e8a8._s(_0xc0f6c9.level))]), _0x12e729("img", {
      attrs: {
        src: require(/*webcrack:missing*/"./63632.js")("./" + _0xc0f6c9.figure + ".gif")
      }
    }), _0xc0f6c9.id === _0x16e8a8.fightPetId ? _0x12e729("div", {
      staticClass: "battle-pet"
    }, [_0x16e8a8._v("出战")]) : _0x16e8a8._e()]);
  }), 0)]), _0x12e729("div", {
    staticClass: "bg-center"
  }, [_0x12e729("div", {
    staticClass: "footer"
  }, [_0x12e729("button", {
    staticClass: "btn--battle",
    on: {
      click: function (_0x2cf50b) {
        return _0x16e8a8.$emit("scene-change", "battle");
      }
    }
  }), _0x12e729("button", {
    staticClass: "btn--back",
    on: {
      click: function (_0x5969b3) {
        return _0x16e8a8.$emit("scene-change", "leave");
      }
    }
  })])]), _0x12e729("div", {
    staticClass: "bg-right"
  })])]], 2);
}
var _0x2b2a81 = [];
var _0xaa2fc3 = {
  name: "WildArm",
  props: ["sceneDetail"],
  computed: {
    dungeonDetail() {
      const _0x477770 = this.$store.getters.dungeonDetail(this.sceneDetail.title, this.dayjs) || null;
      return _0x477770;
    },
    packageProps() {
      return this.$store.state.playerModule.packageDetail.packageProps;
    },
    fightPetId() {
      return this.$store.state.petModule.fightPetId;
    },
    curPets() {
      return this.$store.getters["petModule/curPets"];
    }
  },
  methods: {
    handleBattleClick() {
      if (this.dungeonDetail.isCompleted) {
        const _0x4a6510 = this.packageProps.filter(_0x4914f5 => _0x4914f5.type === "passport" && new RegExp(this.dungeonDetail.name).test(_0x4914f5.name));
        if (_0x4a6510.length > 0) {
          const _0x26cc19 = () => {
            new SSPromise((_0x263596, _0x51a332) => {
              this.$store.commit("playerModule/changePackageProps", {
                props: _0x4a6510,
                handle: "reduce",
                num: 1,
                resolve: _0x263596,
                reject: _0x51a332
              });
            }).then(() => {
              new SSPromise((_0x42e4ee, _0x5b6014) => {
                this.$store.commit("refreshDungeonDetail", {
                  name: this.dungeonDetail.name,
                  resolve: _0x42e4ee,
                  reject: _0x5b6014
                });
              }).then(_0x18d4b1 => {
                this.$gameMessage.info(_0x18d4b1.message);
                this.$emit("scene-change", "battle");
              }).catch(_0x74e2f => {
                this.$gameMessage.info(_0x74e2f.message);
              });
            }).catch(_0x42e793 => {
              this.$gameMessage.info(_0x42e793.message);
            });
          };
          this.$gameAlert.openAlert("系统检测到您身上携带了[" + _0x4a6510[0].name + "]，是否消耗一张通行证重启该副本?", {
            confirmHandle: _0x26cc19
          });
        } else {
          this.$gameMessage.info("《" + this.dungeonDetail.name + "》副本不能重复完成， 明天再来挑战吧！");
        }
      } else {
        this.$emit("scene-change", "battle");
      }
    },
    changeFightPet(_0x3bea4f) {
      if (_0x3bea4f !== this.fightPetId) {
        this.$store.commit("petModule/changeFightPetById", {
          id: _0x3bea4f
        });
      }
    }
  },
  created() {
    this.$store.commit("petModule/changeFightPetById", {
      handle: "init"
    });
    const {
      mapId: _0x5cf313
    } = this.sceneDetail;
    if (_0x5cf313[0] === "d") {
      this.$store.commit("judgeDungeonDetail", {
        dungeonDetail: this.dungeonDetail,
        resolve: _0x56ed16.lQ,
        reject: _0x56ed16.lQ
      });
    }
  }
};
var _0x3e510b = _0xaa2fc3;
import * as _0x2af9ae from /*webcrack:missing*/"./81656.js";
var _0x14c883 = (0, _0x2af9ae.A)(_0x3e510b, _0x16cc57, _0x2b2a81, false, null, null, null);
var _0x2e1158 = _0x14c883.exports;
function _0x4fd81c() {
  var _0x412731 = this;
  var _0xdf3261 = _0x412731._self._c;
  return _0xdf3261("div", {
    class: _0x412731.sceneDetailClass
  }, [_0x412731.battleStatus === "nextRoundWaiting" ? _0xdf3261("div", {
    staticClass: "battle-waiting-loading"
  }, [_0xdf3261("div", {
    staticClass: "waiting-clock"
  }, [_0x412731._v(_0x412731._s(_0x412731.nextRoundWaiting))])]) : _0x412731._e(), _0x412731.isHandleMore ? _0xdf3261("div", {
    class: ["handle-more", _0x412731.handleMoreContext.klass]
  }, [_0xdf3261("div", {
    staticClass: "handle-more-left"
  }), _0xdf3261("ul", {
    staticClass: "handle-more-context"
  }, _0x412731._l(_0x412731.handleMoreContext.list, function (_0x4a299b) {
    return _0xdf3261("li", {
      key: _0x4a299b,
      class: _0x412731.complexMagicKlass,
      on: {
        click: function (_0x659d0d) {
          return _0x412731.battleEngine.clickHandleMoreItem(_0x412731.handleMoreContext.name, _0x4a299b);
        }
      }
    }, [_0x412731._v(" " + _0x412731._s(_0x4a299b) + " ")]);
  }), 0), _0xdf3261("div", {
    staticClass: "handle-more-close",
    on: {
      click: function (_0x4945ef) {
        _0x412731.isHandleMore = false;
      }
    }
  }), _0xdf3261("div", {
    staticClass: "handle-more-right"
  }), _0xdf3261("div", {
    staticClass: "handle-more-down"
  })]) : _0x412731._e(), _0xdf3261("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ["roundStart"].includes(_0x412731.battleStatus),
      expression: "['roundStart'].includes(battleStatus)"
    }],
    staticClass: "handle-bar"
  }, [_0xdf3261("ul", _0x412731._l(_0x412731.battleHandleConfig.list, function (_0x198549) {
    return _0xdf3261("li", {
      key: _0x198549.name,
      class: _0x198549.klass,
      on: {
        click: function (_0x580df8) {
          return _0x412731.handleClick(_0x198549);
        }
      }
    });
  }), 0)]), _0xdf3261("div", {
    staticClass: "clock"
  }, [_0xdf3261("div", [_0x412731._v(_0x412731._s(_0x412731.waiting))])]), _0x412731.battleStatus === "roundFinish" ? _0xdf3261("div", {
    staticClass: "settlement"
  }, [_0xdf3261("ul", [_0xdf3261("li", [_0x412731._v("获得经验：" + _0x412731._s(_0x412731.rewardMessage.exp))]), _0xdf3261("li", [_0x412731._v("获得金币：" + _0x412731._s(_0x412731.rewardMessage.goldCoin) + "个")]), _0xdf3261("li", [_0x412731._v("获得物品：" + _0x412731._s(_0x412731.rewardMessage.propsMessage))]), _0x412731.rewardMessage.interruptMessage ? _0xdf3261("li", {
    staticClass: "interrupt-message"
  }, [_0x412731._v(" " + _0x412731._s(_0x412731.rewardMessage.interruptMessage) + " ")]) : _0x412731._e()]), _0xdf3261("div", [_0xdf3261("span", {
    on: {
      click: function (_0x4c45c1) {
        return _0x412731.battleEngine.startNextRound.call(_0x412731.battleEngine, true);
      }
    }
  }, [_0x412731._v("继续冒险")]), _0xdf3261("span", {
    on: {
      click: function (_0x4e7abe) {
        return _0x412731.handleClick(_0x412731.battleHandleConfig.list[7]);
      }
    }
  }, [_0x412731._v("返回村庄")])])]) : _0x412731._e(), _0x412731.battleStatus ? [_0xdf3261("div", {
    staticClass: "observing-state"
  }, [_0xdf3261("div", {
    staticClass: "observing-state__title"
  }), _0xdf3261("div", {
    staticClass: "observing-state__status"
  }, [_0xdf3261("img", {
    attrs: {
      src: require("./16219.js")
    }
  }), _0xdf3261("img", {
    attrs: {
      src: require("./61326.js")("./" + _0x412731.curFightPet.figure + ".gif")
    }
  }), _0xdf3261("div", {
    staticClass: "hp"
  }, [_0xdf3261("div", {
    staticClass: "color",
    style: "width: " + (_0x412731.curFightPet.hp / _0x412731.curFightPet.maxHp).toFixed(2) * 100 + "%;"
  }), _0xdf3261("div", {
    staticClass: "value"
  }, [_0x412731._v(" " + _0x412731._s(_0x412731.curFightPet.hp) + "/" + _0x412731._s(_0x412731.curFightPet.maxHp) + " ")])]), _0xdf3261("div", {
    staticClass: "mp"
  }, [_0xdf3261("div", {
    staticClass: "color",
    style: "width: " + (_0x412731.curFightPet.mp / _0x412731.curFightPet.maxMp).toFixed(2) * 100 + "%;"
  }), _0xdf3261("div", {
    staticClass: "value"
  }, [_0x412731._v(" " + _0x412731._s(_0x412731.curFightPet.mp) + "/" + _0x412731._s(_0x412731.curFightPet.maxMp) + " ")])]), _0xdf3261("div", {
    staticClass: "exp"
  }, [_0xdf3261("div", {
    staticClass: "color",
    style: "width: " + Math.min((_0x412731.curFightPet.exp / _0x412731.curFightPet.maxExp).toFixed(2) * 100, 100) + "%;"
  }), _0xdf3261("div", {
    staticClass: "value"
  }, [_0x412731._v(" " + _0x412731._s(_0x412731.curFightPet.exp) + "/" + _0x412731._s(_0x412731.curFightPet.maxExp) + " ")])])]), _0xdf3261("div", {
    staticClass: "observing-state__name"
  }, [_0xdf3261("div", [_0x412731._v(_0x412731._s(_0x412731.curFightPet.name.slice(0, 6)))]), _0xdf3261("div", [_0x412731._v(_0x412731._s(_0x412731.curFightPet.name.slice(6)) + " LV." + _0x412731._s(_0x412731.curFightPet.level))])])]), ["opAttack", "opMagic", "obRecovery"].includes(_0x412731.battleStatus) ? _0xdf3261("div", {
    staticClass: "observing-damage"
  }, [_0xdf3261("ul", _0x412731._l(_0x412731.battleMessage, function (_0x3b3be8) {
    return _0xdf3261("li", {
      domProps: {
        innerHTML: _0x412731._s(_0x3b3be8)
      }
    });
  }), 0)]) : _0x412731._e(), _0xdf3261("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ["roundStart", "opAttack", "opMagic", "roundFinish", "stepBack", "obRecovery", "opRecovery"].includes(_0x412731.battleStatus),
      expression: "\n        [\n          'roundStart',\n          'opAttack',\n          'opMagic',\n          'roundFinish',\n          'stepBack',\n          'obRecovery',\n          'opRecovery'\n        ].includes(battleStatus)\n      "
    }],
    staticClass: "observing-prepare"
  }, [_0xdf3261("img", {
    attrs: {
      src: require("./34431.js")("./" + _0x412731.curFightPet.figure + ".gif")
    }
  })]), _0xdf3261("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _0x412731.battleStatus === "obAttack",
      expression: "battleStatus === 'obAttack'"
    }],
    staticClass: "observing-attack"
  }, [_0xdf3261("img", {
    attrs: {
      src: _0x412731.battleStatus === "obAttack" ? require("./64252.js")("./" + _0x412731.curFightPet.figure + ".gif") : ""
    }
  })]), _0xdf3261("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _0x412731.battleStatus === "obMagic",
      expression: "battleStatus === 'obMagic'"
    }],
    staticClass: "observing-magic"
  }, [_0xdf3261("img", {
    attrs: {
      src: _0x412731.battleStatus === "obMagic" ? require("./87359.js")("./" + _0x412731.curFightPet.figure + ".gif") : ""
    }
  })])] : _0x412731._e(), _0x412731.battleStatus ? [_0xdf3261("div", {
    staticClass: "opposing-state"
  }, [_0xdf3261("div", {
    staticClass: "opposing-state__name"
  }, [_0xdf3261("div", [_0xdf3261("span", [_0x412731._v(_0x412731._s(_0x412731.curMonster.name))]), _0x412731.curMonster.level ? _0xdf3261("span", [_0x412731._v(" LV." + _0x412731._s(_0x412731.curMonster.level))]) : _0x412731._e()])]), _0xdf3261("div", {
    staticClass: "opposing-state__attribute"
  }, [_0xdf3261("img", {
    attrs: {
      src: require("./35821.js")
    }
  }), _0xdf3261("div", [_0x412731._v(_0x412731._s(_0x412731.curMonster.attribute))])]), _0xdf3261("div", {
    staticClass: "opposing-state__status"
  }, [_0xdf3261("div", {
    staticClass: "hp"
  }, [_0xdf3261("div", {
    staticClass: "color",
    style: "width: " + (_0x412731.curMonster.hp / _0x412731.curMonster.maxHp).toFixed(2) * 100 + "%;"
  }), _0xdf3261("div", {
    staticClass: "value"
  }, [_0x412731._v(" " + _0x412731._s(_0x412731.curMonster.hp) + "/" + _0x412731._s(_0x412731.curMonster.maxHp)), _0xdf3261("span")])])])]), ["obAttack", "obMagic", "opRecovery"].includes(_0x412731.battleStatus) ? _0xdf3261("div", {
    staticClass: "opposing-damage"
  }, [_0xdf3261("ul", _0x412731._l(_0x412731.battleMessage, function (_0x421d53) {
    return _0xdf3261("li", {
      domProps: {
        innerHTML: _0x412731._s(_0x421d53)
      }
    });
  }), 0)]) : _0x412731._e(), _0xdf3261("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: ["roundStart", "obAttack", "obMagic", "stepBack", "roundFinish", "obRecovery", "opRecovery"].includes(_0x412731.battleStatus),
      expression: "\n        [\n          'roundStart',\n          'obAttack',\n          'obMagic',\n          'stepBack',\n          'roundFinish',\n          'obRecovery',\n          'opRecovery'\n        ].includes(battleStatus)\n      "
    }],
    staticClass: "opposing-prepare"
  }, [_0xdf3261("img", {
    attrs: {
      src: require("./43033.js")("./" + _0x412731.curMonster.figure + ".gif")
    }
  })]), _0xdf3261("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _0x412731.battleStatus === "opAttack",
      expression: "battleStatus === 'opAttack'"
    }],
    staticClass: "opposing-attack"
  }, [_0xdf3261("img", {
    attrs: {
      src: _0x412731.battleStatus === "opAttack" ? require("./73610.js")("./" + _0x412731.curMonster.figure + ".gif") : ""
    }
  })]), _0xdf3261("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _0x412731.battleStatus === "opMagic",
      expression: "battleStatus === 'opMagic'"
    }],
    staticClass: "opposing-magic"
  }, [_0xdf3261("img", {
    attrs: {
      src: _0x412731.battleStatus === "opMagic" ? require("./47177.js")("./" + _0x412731.curMonster.figure + ".gif") : ""
    }
  })])] : _0x412731._e()], 2);
}
var _0x5420c7 = [];
require(/*webcrack:missing*/"./28743.js");
require("./42838.js");
import * as _0x9db866 from /*webcrack:missing*/"./36682.js";
import * as _0x84e43d from /*webcrack:missing*/"./41314.js";
var _0x46df97 = _0x84e43d;
function _0x45453c() {
  return "\n  let timer\n  self.onmessage = (e) => {\n    if (e.data === 'interrupt') {\n      clearInterval(timer)\n      self.close()\n    } else {\n      const delay = e.data.delay\n      let waiting = e.data.waiting\n      const end = e.data.end\n      timer = setInterval(() => {\n        if (waiting <= end) {\n          self.postMessage('timeout')\n          clearInterval(timer)\n          self.close()\n        } else {\n          waiting--\n          self.postMessage('1s')\n        }\n      }, delay)\n    }\n  }\n  ";
}
function _0x1f126a() {
  return "\n    let timer\n      self.onmessage = (e) => {\n        if (e.data === 'interrupt') {\n        clearTimeout(timer)\n        self.close()\n      } else {\n      const delay = e.data.delay;\n      timer = setTimeout(() => {\n      self.postMessage('timeout')\n      clearTimeout(timer)\n      self.close()\n      }, delay)\n      }\n    }\n  ";
}
const _0x4c8167 = new Blob([_0x45453c()], {
  type: "application/javascript",
  credentials: "same-origin"
});
const _0x5d1f1c = new Blob([_0x1f126a()], {
  type: "application/javascript",
  credentials: "same-origin"
});
const _0x5576e7 = typeof window.Worker !== undefined;
function _0x1a51cd(_0x5e1000, _0x4d7628, _0x2d0498, _0x3c3c57) {
  const _0x290ee5 = _0x5e1000.magic.find(_0x3fb022 => _0x3fb022.name === _0x2d0498);
  if (_0x5e1000.mp && _0x290ee5.manaCost) {
    const {
      basic: _0x2dcdf6,
      rate: _0xa0752a
    } = _0x290ee5.manaCost;
    const _0x3c1578 = Math.floor(_0x5e1000.level * _0xa0752a + _0x2dcdf6);
    _0x5e1000.mp = Math.max(_0x5e1000.mp - _0x3c1578, 0);
  }
  const {
    rank: _0x42b08f,
    extra: _0x179cbb,
    bonus: _0x165294,
    hpSteal: _0x211d33,
    mpSteal: _0x36ede9,
    offset: _0x4c77f8
  } = _0x290ee5;
  const _0x3ce561 = [];
  let _0x83ded2 = 0;
  let _0x3cbf23 = _0x179cbb.rate * (_0x42b08f - 1);
  let _0x1d8974 = Math.round(_0x5e1000.atk * (_0x179cbb.basic + _0x3cbf23)) - _0x4d7628.def;
  _0x1d8974 = Math.max(Math.round(_0x1d8974), 1);
  _0x3ce561.push("<font class=\"damage--golden\">" + _0x2d0498 + "：<font class=\"damage--red\">-" + _0x1d8974 + "</font>!!</font>");
  let _0x48b262 = 0;
  if (_0x1d8974 > 1) {
    if (_0x211d33) {
      let _0x5d952d = _0x5e1000.hpSteal ? _0x5e1000.hpSteal : 0;
      _0x5d952d += _0x211d33.basic + _0x211d33.rate * (_0x42b08f - 1);
      let _0x228ea2 = 0;
      _0x228ea2 = _0x3c3c57 && _0x3c3c57 === "圣兽云殿" ? 1 : Math.round(_0x5d952d * _0x1d8974);
      if (_0x5e1000.hp < _0x5e1000.maxHp && _0x228ea2 > 0) {
        _0x228ea2 = Math.min(_0x5e1000.maxHp - _0x5e1000.hp, _0x228ea2);
        _0x5e1000.hp = _0x5e1000.hp + _0x228ea2;
        _0x3ce561.push("<font class=\"damage--green\">生命偷取：+" + _0x228ea2 + "</font>");
      }
    }
    if (_0x36ede9 && _0x5e1000.mp) {
      let _0x1f4d36 = _0x5e1000.mpSteal ? _0x5e1000.mpSteal : 0;
      _0x1f4d36 += _0x36ede9.basic + _0x36ede9.rate * (_0x42b08f - 1);
      const _0x31d687 = Math.round(_0x1f4d36 * _0x1d8974);
      _0x5e1000.mp = Math.min(_0x5e1000.mp + _0x31d687, _0x5e1000.maxMp);
      if (_0x31d687 > 0) {
        _0x3ce561.push("<font class=\"damage--blue\">魔法偷取：+" + _0x31d687 + "</font>");
      }
    }
    if (_0x165294) {
      let _0x5049a0 = _0x5e1000.bonus ? _0x5e1000.bonus : 0;
      _0x5049a0 += _0x165294.basic + _0x165294.rate * (_0x42b08f - 1);
      _0x48b262 = Math.round(_0x5049a0 * _0x1d8974);
      if (_0x48b262 > 0) {
        _0x3ce561.push("<font class=\"damage--purple\">伤害加深：-" + _0x48b262 + "</font>");
      }
    }
    if (_0x4c77f8) {
      let _0x167859 = _0x5e1000.offset ? _0x5e1000.offset : 0;
      _0x167859 += _0x4c77f8.basic + _0x4c77f8.rate * (_0x42b08f - 1);
      _0x5e1000.offsetRate = _0x167859;
    }
  }
  _0x83ded2 = Math.max(_0x1d8974 + _0x48b262, 1);
  if (_0x4d7628.offsetRate && _0x83ded2 > 1) {
    const _0x4c8543 = Math.floor(_0x83ded2 * _0x4d7628.offsetRate, 0);
    _0x83ded2 = Math.max(_0x83ded2 - _0x4c8543, 1);
    _0x3ce561.push("<font class=\"damage--brown\">伤害抵消：+" + _0x4c8543 + "</font>");
  }
  return {
    message: _0x3ce561,
    damage: Number(_0x83ded2)
  };
}
function _0xab2629(_0xcf8f3f, _0x3699f5) {
  if (_0x3699f5 === "dungeon") {
    return [];
  }
  if (_0x3699f5 === "routine") {
    const _0x5b6083 = _0xcf8f3f.$store.state.playerModule.packageDetail.packageProps || [];
    const _0x550b6a = _0x5b6083.filter(_0x2871a8 => _0x2871a8.type === "pockball").map(_0x31d03e => _0x31d03e.name).filter(_0x1958b6 => {
      const _0x4bebe9 = _0x46df97(_0xcf8f3f.sceneDetail.monsters);
      _0x4bebe9.push(_0xcf8f3f.sceneDetail.name);
      return _0x4bebe9.includes(_0x1958b6.replace("·精灵球", ""));
    });
    return _0x550b6a;
  }
}
function _0x27b2dd(_0xa2bec2, _0x343de3) {
  const _0x45ba9c = _0xa2bec2.handleMoreList.findIndex(_0x1d6e78 => _0x1d6e78.name === "catch");
  const _0x559df5 = _0x45ba9c !== -1 ? _0xa2bec2.handleMoreList[_0x45ba9c] : null;
  if (_0x559df5) {
    _0x559df5.list = _0x343de3;
    _0x559df5.available = _0x343de3.length > 0;
    _0xa2bec2.handleMoreList.splice(_0x45ba9c, 1, _0x559df5);
  } else {
    const _0x367e67 = {
      name: "catch",
      klass: "catch",
      list: _0x343de3,
      available: _0x343de3.length > 0
    };
    _0xa2bec2.handleMoreList.push(_0x367e67);
  }
}
class _0x4b2694 {
  constructor(_0x309806) {
    this.app = _0x309806;
    this.roundTimer = null;
    this.handleTimer = null;
    this.nextRoundTimer = null;
    this.autoTimer = null;
    this.isAuto = false;
    this.attackSetting = "普通攻击";
    this.priority = null;
  }
  initFightPetStatus() {
    const _0x198ce5 = this.app.$store.getters["playerModule/equippedPet"]("fightPet");
    const _0x3bbe51 = _0x46df97(_0x198ce5);
    _0x3bbe51.hp = _0x3bbe51.maxHp;
    _0x3bbe51.mp = _0x3bbe51.maxMp;
    const _0xd801c0 = _0x9db866.xS.find(_0x5d4430 => _0x5d4430.figure === _0x3bbe51.figure);
    _0x3bbe51.attackDuration = _0xd801c0?.attackDuration || _0x4b2694.handleTimeCount;
    _0x3bbe51.castingDuration = _0xd801c0?.castingDuration || _0x4b2694.handleTimeCount;
    return _0x3bbe51;
  }
  initMonsterStatus() {
    const {
      sceneDetail: _0x5c73c9,
      monstersRate: _0x386480,
      monstersDetail: _0x3aeec6,
      dungeonDetail: _0x21983e
    } = this.app;
    let _0x5875d9;
    if (_0x5c73c9.type === "routine") {
      const _0x141e1b = (0, _0x56ed16.bd)(1, 1000);
      for (let _0x1651d5 = 0; _0x1651d5 < _0x386480.length; _0x1651d5++) {
        const _0x4e4d34 = _0x386480[_0x1651d5];
        if (_0x4e4d34.rate[0] <= _0x141e1b && _0x141e1b <= _0x4e4d34.rate[1]) {
          const _0x270ee2 = _0x3aeec6.find(_0x29732b => _0x29732b.figure === _0x4e4d34.figure);
          _0x5875d9 = _0x46df97(_0x270ee2);
          break;
        }
      }
      const _0x514ada = ["atk", "def", "maxHp", "spd"];
      if (!_0x5875d9.type) {
        _0x514ada.push("level");
      }
      for (let _0x3d2fff of _0x514ada) {
        _0x5875d9[_0x3d2fff] = (0, _0x56ed16.bd)(_0x5875d9[_0x3d2fff][0], _0x5875d9[_0x3d2fff][1]);
      }
      _0x5875d9.hp = _0x5875d9.maxHp;
    }
    if (_0x5c73c9.type === "dungeon") {
      new SSPromise((_0x159813, _0x2fe49e) => {
        this.app.$store.commit("judgeDungeonDetail", {
          dungeonDetail: _0x21983e,
          resolve: _0x159813,
          reject: _0x2fe49e
        });
      }).finally(() => {
        _0x5875d9 = _0x46df97(_0x3aeec6[_0x21983e.curNum - 1]);
        _0x5875d9.hp = _0x5875d9.maxHp;
      });
    }
    const _0x397c03 = _0x9db866.xS.find(_0x207e01 => _0x207e01.figure === _0x5875d9.figure);
    _0x5875d9.attackDuration = _0x397c03?.attackDuration || _0x4b2694.handleTimeCount;
    _0x5875d9.castingDuration = _0x397c03?.castingDuration || _0x4b2694.handleTimeCount;
    return _0x5875d9;
  }
  createBattleStatus() {
    const _0x43bf43 = this.initFightPetStatus();
    const _0x225e26 = this.initMonsterStatus();
    this.priority = _0x43bf43.spd >= _0x225e26.spd ? _0x43bf43 : _0x225e26;
    this.app.curFightPet = _0x43bf43;
    this.app.curMonster = _0x225e26;
  }
  executeCommand(_0x1d833f) {
    const _0x3767b1 = this.app;
    if (_0x3767b1.isHandleMore && _0x1d833f.name === _0x3767b1.handleMoreContext?.name) {
      _0x3767b1.isHandleMore = false;
    } else {
      _0x3767b1.isHandleMore = false;
      switch (_0x1d833f.name) {
        case "automaticCombat":
        case "attackSettings":
          _0x3767b1.isHandleMore = true;
          _0x3767b1.handleMoreContext = this.app.handleMoreList.find(_0x25c2eb => _0x25c2eb.name === _0x1d833f.name);
          break;
        case "attack":
          if (_0x5576e7) {
            this.roundTimer.postMessage("interrupt");
          } else {
            clearInterval(this.roundTimer);
          }
          this.resetOffsetRate();
          if (this.priority === _0x3767b1.curFightPet) {
            this.obAttack();
          } else {
            this.opMagic();
          }
          break;
        case "magic":
          _0x3767b1.handleMoreContext = _0x3767b1.handleMoreList.find(_0x27c887 => _0x27c887.name === _0x1d833f.name);
          if (_0x3767b1.handleMoreContext.available) {
            _0x3767b1.isHandleMore = true;
          } else {
            _0x3767b1.$gameMessage.info("该宠物没有可用的主动技能哦！(可以通过技能书学习)");
          }
          break;
        case "support":
          _0x3767b1.$gameMessage.info("辅助功能暂未开发完成哦！");
          break;
        case "catch":
          _0x3767b1.handleMoreContext = this.app.handleMoreList.find(_0x1818e1 => _0x1818e1.name === "catch");
          if (_0x3767b1.sceneDetail.type === "dungeon") {
            _0x3767b1.$gameMessage.info("《" + _0x3767b1.sceneDetail.name + "》副本无法进行捕捉操作！");
          } else if (_0x3767b1.handleMoreContext.available) {
            _0x3767b1.isHandleMore = true;
          } else {
            _0x3767b1.$gameMessage.info("您没有携带" + _0x3767b1.sceneDetail.name + "场景内可用的精灵球！");
          }
          break;
        case "prop":
          _0x3767b1.$gameMessage.info("道具功能暂未开发完成哦！");
          break;
        case "escape":
          _0x3767b1.$emit("scene-change", "arm");
          break;
        default:
          throw new Error("未知战斗操作：" + JSON.stringify(_0x1d833f));
      }
    }
  }
  roundStart() {
    const _0x35fd25 = this.app;
    const {
      sceneDetail: _0x509371
    } = this.app;
    _0x35fd25.waiting = _0x4b2694.roundTimeCount;
    _0x35fd25.battleMessage = null;
    _0x35fd25.rewardMessage = null;
    const _0x245fe8 = _0xab2629(_0x35fd25, _0x509371.type);
    _0x27b2dd(_0x35fd25, _0x245fe8);
    if (_0x5576e7) {
      this.roundTimer = new Worker(URL.createObjectURL(_0x4c8167));
      this.roundTimer.postMessage({
        delay: 1000,
        waiting: _0x35fd25.waiting,
        end: 0
      });
      this.roundTimer.onmessage = _0x1cea1d => {
        if (_0x1cea1d.data === "1s") {
          _0x35fd25.waiting--;
        } else {
          this.roundTimeout();
        }
      };
    } else {
      this.roundTimer = setInterval(() => {
        if (_0x35fd25.waiting <= 0) {
          clearInterval(this.roundTimer);
          this.roundTimeout();
        } else {
          _0x35fd25.waiting--;
        }
      }, 1000);
    }
    _0x35fd25.battleStatus = "roundStart";
  }
  roundTimeout() {
    if (this.attackSetting === "普通攻击") {
      this.executeCommand({
        name: "attack"
      });
    } else {
      this.clickHandleMoreItem("magic", this.attackSetting);
    }
  }
  obAttack() {
    const _0x75af08 = this.app;
    const {
      curFightPet: _0x11fdd9,
      curMonster: _0x2c19a0
    } = this.app;
    _0x75af08.waiting = "PK";
    _0x75af08.battleStatus = "obAttack";
    const {
      damage: _0x575033,
      message: _0x326469
    } = _0x1a51cd(_0x11fdd9, _0x2c19a0, "普通攻击");
    _0x2c19a0.hp = Math.max(_0x2c19a0.hp - _0x575033, 0);
    _0x75af08.battleMessage = _0x326469;
    const _0x263b28 = () => {
      if (_0x2c19a0.hp <= 0) {
        this.roundFinish();
      } else if (this.priority === _0x75af08.curFightPet) {
        this.stepBack();
      } else {
        this.roundStart();
      }
    };
    if (_0x5576e7) {
      this.handleTimer = new Worker(URL.createObjectURL(_0x5d1f1c));
      this.handleTimer.postMessage({
        delay: _0x75af08.curFightPet.attackDuration
      });
      this.handleTimer.onmessage = _0x263b28;
    } else {
      this.handleTimer = setTimeout(() => {
        _0x263b28();
        clearTimeout(this.handleTimer);
      }, _0x75af08.curFightPet.attackDuration);
    }
  }
  obMagic(_0x5cdb1a) {
    const _0x4e38be = this.app;
    const {
      curFightPet: _0x4f64bc,
      curMonster: _0x30de8d
    } = this.app;
    const _0x135310 = _0x4f64bc.magic.find(_0x16e26 => _0x16e26.name === _0x5cdb1a);
    if (!_0x135310) {
      this.obAttack();
      return;
    }
    const {
      basic: _0x6770b1,
      rate: _0x293bdb
    } = _0x135310.manaCost;
    const _0x29c628 = Math.floor(_0x4f64bc.level * _0x293bdb + _0x6770b1);
    if (_0x29c628 > _0x4f64bc.mp) {
      this.app.$gameMessage.info(_0x4f64bc.name + "当前魔法不足，只能进行普通攻击操作");
      this.obAttack();
      return;
    }
    if (_0x135310.recovery) {
      this.obRecovery(_0x135310);
      return;
    }
    _0x4e38be.waiting = "PK";
    _0x4e38be.battleStatus = "obMagic";
    const {
      damage: _0x374fc2,
      message: _0x51d4b8
    } = _0x1a51cd(_0x4f64bc, _0x30de8d, _0x5cdb1a);
    _0x30de8d.hp = Math.max(_0x30de8d.hp - _0x374fc2, 0);
    _0x4e38be.battleMessage = _0x51d4b8;
    const _0x330279 = () => {
      if (_0x30de8d.hp <= 0) {
        this.roundFinish();
      } else if (this.priority === _0x4e38be.curFightPet) {
        this.stepBack();
      } else {
        this.roundStart();
      }
    };
    if (_0x5576e7) {
      this.handleTimer = new Worker(URL.createObjectURL(_0x5d1f1c));
      this.handleTimer.postMessage({
        delay: _0x4e38be.curFightPet.castingDuration
      });
      this.handleTimer.onmessage = _0x330279;
    } else {
      this.handleTimer = setTimeout(() => {
        _0x330279();
        clearTimeout(this.handleTimer);
      }, _0x4e38be.curFightPet.castingDuration);
    }
  }
  obRecovery(_0x5e4500) {
    const _0x307b36 = this.app;
    const {
      curMonster: _0x58e9e5,
      curFightPet: _0x3c9229
    } = this.app;
    const {
      rank: _0x897a72,
      recovery: _0x503273,
      name: _0x20afea,
      manaCost: _0x391c1f
    } = _0x5e4500;
    const {
      basic: _0x2a6066,
      rate: _0x17452f
    } = _0x391c1f;
    const _0x1c0787 = Math.floor(_0x3c9229.level * _0x17452f + _0x2a6066);
    let _0xc89979 = _0x3c9229.recovery > 0 ? _0x3c9229.recovery : 0;
    _0xc89979 += _0x503273.basic + _0x503273.rate * (1 - _0x897a72);
    const _0x183ba5 = Math.round(_0x3c9229.maxHp * _0xc89979);
    _0x3c9229.hp = Math.min(_0x3c9229.hp + _0x183ba5, _0x3c9229.maxHp);
    _0x3c9229.mp = Math.max(_0x3c9229.mp - _0x1c0787, 0);
    _0x307b36.battleMessage = ["<font class=\"damage--golden\">" + _0x20afea + "：<font class=\"damage--green\">+" + _0x183ba5 + "</font>!!</font>"];
    _0x307b36.waiting = "PK";
    _0x307b36.battleStatus = "obRecovery";
    const _0x577269 = () => {
      if (_0x58e9e5.hp <= 0) {
        this.roundFinish();
      } else if (this.priority === _0x307b36.curFightPet) {
        this.stepBack();
      } else {
        this.roundStart();
      }
    };
    if (_0x5576e7) {
      this.handleTimer = new Worker(URL.createObjectURL(_0x5d1f1c));
      this.handleTimer.postMessage({
        delay: 1500
      });
      this.handleTimer.onmessage = _0x577269;
    } else {
      this.handleTimer = setTimeout(() => {
        _0x577269();
        clearTimeout(this.handleTimer);
      }, 1500);
    }
  }
  opAttack(_0x1fce38) {
    const _0x3fca80 = this.app;
    const {
      curFightPet: _0x4a6329,
      curMonster: _0x2787d1
    } = this.app;
    _0x3fca80.waiting = "PK";
    _0x3fca80.battleStatus = "opAttack";
    const {
      damage: _0x36cc5b,
      message: _0x4716cb
    } = _0x1a51cd(_0x2787d1, _0x4a6329, "普通攻击");
    _0x4a6329.hp = Math.max(_0x4a6329.hp - _0x36cc5b, 0);
    _0x3fca80.battleMessage = _0x4716cb;
    const _0x1a0bdd = () => {
      if (_0x4a6329.hp > 0) {
        if (this.priority === _0x3fca80.curFightPet) {
          this.roundStart();
        } else {
          this.stepBack(_0x1fce38);
        }
      } else {
        this.roundFinish(true, "您的宝宝被对面怪物击败了，先去提升自己的实力吧！");
      }
    };
    if (_0x5576e7) {
      this.handleTimer = new Worker(URL.createObjectURL(_0x5d1f1c));
      this.handleTimer.postMessage({
        delay: _0x3fca80.curMonster.attackDuration
      });
      this.handleTimer.onmessage = _0x1a0bdd;
    } else {
      this.handleTimer = setTimeout(() => {
        _0x1a0bdd();
        clearTimeout(this.handleTimer);
      }, _0x3fca80.curMonster.attackDuration);
    }
  }
  opMagic(_0x3e957a) {
    const _0x3e1804 = this.app.curMonster.magic.length;
    if (_0x3e1804 === 1) {
      this.opAttack(_0x3e957a);
      return;
    }
    const _0x600c8d = Math.random();
    if (_0x600c8d > 0.25) {
      this.opAttack(_0x3e957a);
      return;
    }
    let _0x216d75 = this.app.curMonster.magic;
    if (this.app.curMonster.hp >= this.app.curMonster.maxHp) {
      _0x216d75 = _0x216d75.filter(_0x3d0634 => !_0x3d0634.recovery);
    }
    const _0x5298f5 = _0x216d75[(0, _0x56ed16.bd)(1, _0x216d75.length - 1)];
    if (_0x5298f5.recovery) {
      this.opRecovery(_0x5298f5, _0x3e957a);
      return;
    }
    const _0x195133 = this.app;
    const {
      curFightPet: _0x4d7dba,
      curMonster: _0x15903c,
      sceneDetail: _0x3b822d
    } = this.app;
    _0x195133.waiting = "PK";
    _0x195133.battleStatus = "opMagic";
    const _0x5ee72e = _0x5298f5.name;
    const {
      damage: _0x525e84,
      message: _0x5d8715
    } = _0x1a51cd(_0x15903c, _0x4d7dba, _0x5ee72e, _0x3b822d.name);
    _0x4d7dba.hp = Math.max(_0x4d7dba.hp - _0x525e84, 0);
    _0x195133.battleMessage = _0x5d8715;
    const _0x23c618 = () => {
      if (_0x4d7dba.hp > 0) {
        if (this.priority === _0x195133.curFightPet) {
          this.roundStart();
        } else {
          this.stepBack(_0x3e957a);
        }
      } else {
        this.roundFinish(true, "您的宝宝被对面怪物击败了，先去提升自己的实力吧！");
      }
    };
    if (_0x5576e7) {
      this.handleTimer = new Worker(URL.createObjectURL(_0x5d1f1c));
      this.handleTimer.postMessage({
        delay: _0x195133.curMonster.castingDuration
      });
      this.handleTimer.onmessage = _0x23c618;
    } else {
      this.handleTimer = setTimeout(() => {
        _0x23c618();
        clearTimeout(this.handleTimer);
      }, _0x195133.curMonster.castingDuration);
    }
  }
  opRecovery(_0x58f392, _0x30c88d) {
    const _0x47ccb2 = this.app;
    const {
      curMonster: _0x41870b,
      curFightPet: _0x2dc721,
      sceneDetail: _0x5798a2
    } = this.app;
    const {
      rank: _0x45d828,
      recovery: _0x1cfd89,
      name: _0x5251ec
    } = _0x58f392;
    let _0x1405a7 = 0;
    if (_0x5798a2.name === "圣兽云殿") {
      _0x1405a7 = 1;
    } else {
      let _0x48bef1 = _0x1cfd89.basic + _0x1cfd89.rate * (1 - _0x45d828);
      _0x1405a7 = Math.round(_0x41870b.maxHp * _0x48bef1);
    }
    _0x41870b.hp = Math.min(_0x41870b.hp + _0x1405a7, _0x41870b.maxHp);
    _0x47ccb2.battleMessage = ["<font class=\"damage--golden\">" + _0x5251ec + "：<font class=\"damage--green\">+" + _0x1405a7 + "</font>!!</font>"];
    _0x47ccb2.waiting = "PK";
    _0x47ccb2.battleStatus = "opRecovery";
    const _0x32d01c = () => {
      if (_0x2dc721.hp > 0) {
        if (this.priority === _0x47ccb2.curFightPet) {
          this.roundStart();
        } else {
          this.stepBack(_0x30c88d);
        }
      } else {
        this.roundFinish(true, "您的宝宝被对面怪物击败了，先去提升自己的实力吧！");
      }
    };
    if (_0x5576e7) {
      this.handleTimer = new Worker(URL.createObjectURL(_0x5d1f1c));
      this.handleTimer.postMessage({
        delay: 1500
      });
      this.handleTimer.onmessage = _0x32d01c;
    } else {
      this.handleTimer = setTimeout(() => {
        _0x32d01c();
        clearTimeout(this.handleTimer);
      }, 1500);
    }
  }
  roundFinish(_0x94965a, _0x206d2a) {
    const _0x4430ee = this.app;
    _0x4430ee.battleStatus = "roundFinish";
    _0x4430ee.waiting = "KO";
    _0x4430ee.battleMessage = null;
    if (this.isAuto) {
      if (_0x5576e7) {
        this.autoTimer = new Worker(URL.createObjectURL(_0x5d1f1c));
        this.autoTimer.postMessage({
          delay: 2000
        });
        this.autoTimer.onmessage = () => {
          this.startNextRound();
        };
      } else {
        this.autoTimer = setTimeout(() => {
          this.startNextRound();
          clearTimeout(this.autoTimer);
        }, 2000);
      }
    }
    this.countReward(_0x94965a, _0x206d2a);
  }
  stepBack(_0x5527b1) {
    const _0x1a5aa6 = this.app;
    _0x1a5aa6.battleStatus = "stepBack";
    const _0x559717 = () => {
      if (this.priority === _0x1a5aa6.curFightPet) {
        this.opMagic();
      } else if (_0x5527b1 === "普通攻击") {
        this.obAttack();
      } else {
        this.obMagic(_0x5527b1);
      }
    };
    if (_0x5576e7) {
      this.handleTimer = new Worker(URL.createObjectURL(_0x5d1f1c));
      this.handleTimer.postMessage({
        delay: 500
      });
      this.handleTimer.onmessage = _0x559717;
    } else {
      this.handleTimer = setTimeout(() => {
        _0x559717();
        clearTimeout(this.handleTimer);
      }, 500);
    }
  }
  startNextRound(_0x18f520) {
    if (this.autoTimer) {
      if (_0x5576e7) {
        this.autoTimer.postMessage("interrupt");
      } else {
        clearTimeout(this.autoTimer);
      }
    }
    const _0x151096 = this.app;
    if (_0x151096.sceneDetail.type === "dungeon" && _0x151096.dungeonDetail.isCompleted) {
      _0x151096.$gameMessage.info("您已完成《" + _0x151096.dungeonDetail.name + "》副本，被一股神秘的力量传送回村庄。");
      this.executeCommand({
        name: "escape",
        klass: "escape",
        sort: 7
      });
      return;
    }
    _0x151096.battleStatus = "nextRoundWaiting";
    _0x151096.nextRoundWaiting = _0x18f520 && !this.isAuto ? 1 : _0x4b2694.nextRoundWaiting;
    if (_0x5576e7) {
      this.nextRoundTimer = new Worker(URL.createObjectURL(_0x4c8167));
      this.nextRoundTimer.postMessage({
        delay: 1000,
        waiting: _0x151096.nextRoundWaiting,
        end: 0
      });
      this.nextRoundTimer.onmessage = _0xad9464 => {
        if (_0xad9464.data === "1s") {
          _0x151096.nextRoundWaiting--;
        } else {
          this.createBattleStatus();
          this.roundStart();
        }
      };
    } else {
      this.nextRoundTimer = setInterval(() => {
        if (_0x151096.nextRoundWaiting <= 1) {
          clearInterval(this.nextRoundTimer);
          this.createBattleStatus();
          this.roundStart();
        } else {
          _0x151096.nextRoundWaiting--;
        }
      }, 1000);
    }
  }
  clearAll() {
    if (this.roundTimer) {
      if (_0x5576e7) {
        this.roundTimer.postMessage("interrupt");
      } else {
        clearInterval(this.roundTimer);
      }
    }
    if (this.handleTimer) {
      if (_0x5576e7) {
        this.handleTimer.postMessage("interrupt");
      } else {
        clearTimeout(this.handleTimer);
      }
    }
    if (this.nextRoundTimer) {
      if (_0x5576e7) {
        this.nextRoundTimer.postMessage("interrupt");
      } else {
        clearInterval(this.nextRoundTimer);
      }
    }
    if (this.autoTimer) {
      if (_0x5576e7) {
        this.autoTimer.postMessage("interrupt");
      } else {
        clearTimeout(this.autoTimer);
      }
    }
    _0x4b2694.roundTimeCount = 10;
    _0x4b2694.nextRoundWaiting = 5;
    _0x4b2694.handleTimeCount = 2700;
  }
  excAutoHandle(_0xe5cdc2) {
    const _0x1a8e35 = this.app;
    if (_0xe5cdc2 === "start") {
      if (this.isAuto) {
        _0x1a8e35.$gameMessage.info("请勿重复开启自动战斗！");
        return;
      }
      const _0x2c5860 = () => {
        this.resetOffsetRate();
        this.isAuto = true;
        _0x1a8e35.waiting = "PK";
        _0x4b2694.roundTimeCount = 3;
        if (this.priority === _0x1a8e35.curFightPet) {
          if (this.attackSetting === "普通攻击") {
            this.obAttack();
          } else {
            this.obMagic(this.attackSetting);
          }
        } else {
          this.opMagic(this.attackSetting);
        }
        _0x1a8e35.$gameMessage.info("开启自动战斗成功！");
        if (this.roundTimer) {
          if (_0x5576e7) {
            this.roundTimer.postMessage("interrupt");
          } else {
            clearTimeout(this.roundTimer);
          }
        }
      };
      if (_0x5576e7) {
        this.autoTimer = new Worker(URL.createObjectURL(_0x5d1f1c));
        this.autoTimer.postMessage({
          delay: 100
        });
        this.autoTimer.onmessage = _0x2c5860;
      } else {
        this.autoTimer = setTimeout(() => {
          _0x2c5860();
          clearTimeout(this.autoTimer);
        }, 100);
      }
    } else if (_0xe5cdc2 === "stop") {
      if (!this.isAuto) {
        _0x1a8e35.$gameMessage.info("您并没有处于自动战斗状态。");
        return;
      }
      _0x4b2694.roundTimeCount = 10;
      this.isAuto = false;
      if (this.autoTimer) {
        if (_0x5576e7) {
          this.autoTimer.postMessage("interrupt");
        } else {
          clearTimeout(this.autoTimer);
        }
      }
      _0x1a8e35.$gameMessage.info("关闭自动战斗成功！");
    }
  }
  initHandleMoreList() {
    const _0x378cbc = this.app;
    const _0x180ced = _0x378cbc.$store.getters["petModule/fightPet"];
    const _0x35be76 = {
      name: "automaticCombat",
      klass: "automatic-combat",
      list: ["开启自动战斗", "关闭自动战斗"]
    };
    const _0x28758c = {
      name: "attackSettings",
      klass: "attack-settings",
      list: _0x180ced.magic.filter(_0x60fbe9 => !_0x60fbe9.recovery).map(_0x154787 => _0x154787.name)
    };
    const _0x9bf6b6 = _0x180ced.magic.map(_0x4a1e99 => _0x4a1e99.name).filter(_0x2a005c => _0x2a005c !== "普通攻击");
    const _0x2face0 = {
      name: "magic",
      klass: "magic",
      list: _0x9bf6b6,
      available: _0x9bf6b6.length > 0
    };
    _0x378cbc.handleMoreList = [_0x35be76, _0x28758c, _0x2face0];
  }
  clickHandleMoreItem(_0x2bb842, _0xf4e771) {
    switch (_0x2bb842) {
      case "attackSettings":
        this.attackSetting = _0xf4e771;
        this.app.$gameMessage.info("自动战斗攻击设置为: " + _0xf4e771 + "！");
        break;
      case "automaticCombat":
        this.excAutoHandle(_0xf4e771 === "开启自动战斗" ? "start" : "stop");
        break;
      case "magic":
        if (_0x5576e7) {
          this.roundTimer.postMessage("interrupt");
        } else {
          clearInterval(this.roundTimer);
        }
        this.resetOffsetRate();
        if (this.priority === this.app.curFightPet) {
          this.obMagic(_0xf4e771);
        } else {
          this.opMagic(_0xf4e771);
        }
        break;
      case "catch":
        if (_0x5576e7) {
          this.roundTimer.postMessage("interrupt");
        } else {
          clearInterval(this.roundTimer);
        }
        this.resetOffsetRate();
        this.catchMonster(_0xf4e771);
        break;
      default:
        throw new Error("未知handlerMore：" + _0x2bb842 + " " + _0xf4e771);
    }
    this.app.isHandleMore = false;
  }
  countReward(_0x2a11a2, _0x2729de) {
    const _0x5dcfd7 = this.app;
    const _0x4cdfbc = _0x5dcfd7.sceneDetail.reward;
    const _0xab92ed = _0x5dcfd7.curMonster.reward;
    let _0x24e8c9;
    let _0x231db8;
    let _0x5ac598;
    let _0x3df4d5 = [];
    if (_0x2a11a2) {
      _0x24e8c9 = 0;
      _0x231db8 = 0;
      _0x5ac598 = "";
    } else {
      const _0x53bc5c = _0x5dcfd7.sceneDetail.type === "dungeon" || !!_0x5dcfd7.curMonster.type && (_0x5dcfd7.curMonster.type === "boss" || _0x5dcfd7.curMonster.type === "gift");
      _0x24e8c9 = _0x53bc5c ? _0xab92ed.exp + _0x4cdfbc.exp : _0x4cdfbc.exp;
      _0x231db8 = _0x53bc5c ? _0xab92ed.goldCoin + _0x4cdfbc.goldCoin : _0x4cdfbc.goldCoin;
      _0x4cdfbc.props.map(_0x5f0842 => {
        const _0x3bf32b = (0, _0x56ed16.bd)(1, 1000);
        if (_0x5f0842.rate[0] <= _0x3bf32b && _0x5f0842.rate[1] >= _0x3bf32b) {
          let _0xe6ece4 = _0x9db866.uP.find(_0x1030a9 => _0x1030a9.name === _0x5f0842.name);
          if (_0xe6ece4) {
            _0xe6ece4 = (0, _0x56ed16.X$)({}, _0xe6ece4);
            _0xe6ece4.num = 1;
            _0x3df4d5.push(_0xe6ece4);
          }
        }
        return _0x3df4d5;
      });
      _0xab92ed.props.map(_0x598093 => {
        const _0x4ef00b = (0, _0x56ed16.bd)(1, 1000);
        if (_0x598093.rate[0] <= _0x4ef00b && _0x598093.rate[1] >= _0x4ef00b) {
          const _0x4a65bb = _0x3df4d5.findIndex(_0x3eb811 => _0x3eb811.name === _0x598093.name);
          if (_0x4a65bb > -1) {
            _0x3df4d5[_0x4a65bb].num += 1;
          } else {
            let _0x3fc8b5 = _0x9db866.uP.find(_0x9069cf => _0x9069cf.name === _0x598093.name);
            if (_0x3fc8b5) {
              _0x3fc8b5 = (0, _0x56ed16.X$)({}, _0x3fc8b5);
              _0x3fc8b5.num = 1;
              _0x3df4d5.push(_0x3fc8b5);
            }
          }
        }
        return _0x3df4d5;
      });
      const _0x199864 = _0x5dcfd7.$store.state.missionModule.missions.accepted;
      const _0x30b213 = _0x199864.filter(_0x574ae1 => _0x574ae1.progress?.monsters);
      let _0x2e8a5a = false;
      for (let _0x9e9999 of _0x30b213) {
        const _0x4ddf72 = _0x9e9999.progress.monsters;
        const _0x59e24e = _0x9e9999.target.monsters;
        for (let _0x491efb in _0x4ddf72) {
          if (_0x4ddf72[_0x491efb].map === _0x5dcfd7.sceneDetail.name && _0x4ddf72[_0x491efb].name.find(_0x10a905 => _0x10a905 === _0x5dcfd7.curMonster.name) && _0x4ddf72[_0x491efb].num < _0x59e24e[_0x491efb].num) {
            _0x4ddf72[_0x491efb].num += 1;
            _0x5dcfd7.$store.commit("missionModule/changeAcceptedMissionProgress", {
              mission: _0x9e9999
            });
            _0x2e8a5a = true;
            break;
          }
        }
        if (_0x2e8a5a) {
          break;
        }
      }
      if (_0x5dcfd7.sceneDetail.type === "dungeon") {
        new SSPromise((_0x292e94, _0x24e6f4) => {
          _0x5dcfd7.$store.commit("updateDungeonDetail", {
            name: _0x5dcfd7.sceneDetail.name,
            resolve: _0x292e94,
            reject: _0x24e6f4
          });
        }).then(_0x1e7b4d => {
          if (_0x1e7b4d.status === "complete") {
            if (this.isAuto) {
              this.excAutoHandle("stop");
            }
            _0x2729de = _0x1e7b4d.message;
          }
        }).catch(_0x2d70ca => {
          _0x5dcfd7.$gameMessage.info(_0x2d70ca.message);
        });
      } else {
        const _0x5aa838 = ["新手基地", "死亡沙漠", "石阵", "平原", "绿荫林", "五指石印", "鬼屋", "天空之城", "天之路", "危之路"];
        const _0xfbf74e = ["新手基地", "黄金陵", "炽热沙滩"];
        const _0xae6690 = _0x5dcfd7.sceneDetail.name;
        const _0x36a63c = _0x5dcfd7.curMonster.name;
        if (_0x5dcfd7.curMonster.type === "boss" && _0x5aa838.includes(_0xae6690)) {
          _0x5dcfd7.$store.commit("updateMedalProgress", {
            type: "defeatBoss",
            map: _0xae6690,
            monster: _0x36a63c
          });
        } else if (_0xfbf74e.includes(_0xae6690)) {
          _0x5dcfd7.$store.commit("updateMedalProgress", {
            type: "defeatMonster",
            map: _0xae6690,
            monster: _0x36a63c
          });
        }
      }
      _0x5dcfd7.$store.commit("petModule/addFightPetExp", _0x24e8c9);
      _0x5dcfd7.curFightPet.exp += _0x24e8c9;
      _0x5dcfd7.$store.commit("playerModule/changePlayerDetail", {
        sKey: "goldCoin",
        sValue: _0x231db8
      });
      const _0x5965cf = _0x3df4d5.map(_0xc1bff3 => _0xc1bff3.num > 1 ? _0xc1bff3.name + " * " + _0xc1bff3.num : _0xc1bff3.name);
      _0x5ac598 = _0x5965cf.join(", ");
      new SSPromise((_0x2511c8, _0x2afebd) => {
        _0x5dcfd7.$store.commit("playerModule/changePackageProps", {
          handle: "add",
          props: _0x3df4d5,
          resolve: _0x2511c8,
          reject: _0x2afebd
        });
      }).catch(_0x188d52 => {
        _0x5dcfd7.$gameMessage.info(_0x188d52.message);
      });
    }
    _0x5dcfd7.rewardMessage = {
      exp: _0x24e8c9 || "0",
      goldCoin: _0x231db8 || "0",
      propsMessage: _0x5ac598 || "无",
      interruptMessage: _0x2729de
    };
  }
  catchMonster(_0x5e3590) {
    const _0x35b8cc = this.app;
    const {
      petModule: _0x1cf60b,
      playerModule: _0x4888be
    } = _0x35b8cc.$store.state;
    new SSPromise((_0x2f6550, _0x35afc2) => {
      if (_0x35b8cc.sceneDetail.type !== "routine") {
        _0x35afc2({
          status: "fail",
          message: "该地图不可捕捉任何宠物！"
        });
        return;
      }
      if (_0x1cf60b.curPetsId.length >= 4) {
        _0x35afc2({
          status: "cantCatch",
          message: "当前携带宠物数量已达到上限，请先放置部分宠物到牧场吧！"
        });
        return;
      }
      const _0xf2eb5d = _0x4888be.packageDetail.packageProps.find(_0x1a9c11 => _0x1a9c11.name === _0x5e3590);
      if (!_0xf2eb5d || _0xf2eb5d.num <= 0) {
        _0x35afc2({
          status: "fail",
          message: "捕捉失败，您的" + _0x5e3590 + "不足！"
        });
        return;
      }
      let _0x209e4b = _0x5e3590.replace("·精灵球", "");
      const _0x461f04 = _0x35b8cc.monstersDetail.filter(_0x3013a1 => !_0x3013a1.type).map(_0x3d5f60 => _0x3d5f60.name);
      if (_0x35b8cc.sceneDetail.name !== _0x209e4b) {
        if (!_0x461f04.includes(_0x209e4b) || _0x209e4b !== _0x35b8cc.curMonster.name) {
          _0x35afc2({
            status: "cantCatch",
            message: "捕捉失败，" + _0x5e3590 + "只能用来捕捉" + _0x209e4b + "！"
          });
          return;
        }
      } else if (!_0x461f04.includes(_0x35b8cc.curMonster.name)) {
        _0x35afc2({
          status: "cantCatch",
          message: _0x35b8cc.curMonster.name + "无法被捕捉哦！"
        });
        return;
      }
      _0x35b8cc.$propsFunc.useProp(_0xf2eb5d, {
        component: "wildBattle",
        monster: _0x35b8cc.curMonster
      }, _0x2f6550, _0x35afc2);
    }).then(_0x19a8e3 => {
      const _0x48aae1 = _0x35b8cc.sceneDetail.name;
      const _0x5e673d = ["海底世界", "石阵", "平原", "绿荫林", "五指石印", "鬼屋", "天空之城", "天之路", "危之路", "圣兽云殿"];
      let _0x28de18;
      if (_0x48aae1 === "冰滩" && _0x35b8cc.curMonster.name === "涅磐兽") {
        _0x28de18 = _0x35b8cc.curMonster.name;
        _0x35b8cc.$store.commit("updateMedalProgress", {
          type: "capturePet",
          map: _0x48aae1,
          pet: _0x28de18
        });
      } else if (_0x5e673d.includes(_0x48aae1)) {
        _0x28de18 = _0x35b8cc.curMonster.name;
      } else if (_0x48aae1 === "黄金陵" && _0x35b8cc.curMonster.name === "波姆兔") {
        _0x35b8cc.$store.commit("updateMedalProgress", {
          type: "capturePet",
          map: _0x48aae1,
          pet: _0x35b8cc.curMonster.name
        });
      }
      this.roundFinish(true, _0x19a8e3.message);
    }).catch(_0x3ca344 => {
      _0x35b8cc.$gameMessage.info(_0x3ca344.message);
      this.roundTimeout();
    });
  }
  resetOffsetRate() {
    const {
      curFightPet: _0x292a38,
      curMonster: _0x347aa3
    } = this.app;
    _0x292a38.offsetRate = 0;
    _0x347aa3.offsetRate = 0;
  }
}
_0x4b2694.roundTimeCount = 10;
_0x4b2694.nextRoundWaiting = 5;
_0x4b2694.handleTimeCount = 2700;
_0x4b2694.version = "0.0.1";
var _0x2c19f2 = _0x4b2694;
var _0x272cd6 = {
  name: "WildBattle",
  props: ["sceneDetail"],
  data() {
    return {
      curMonster: null,
      curFightPet: null,
      waiting: 10,
      battleStatus: null,
      battleMessage: null,
      isHandleMore: false,
      handleMoreContext: null,
      nextRoundWaiting: null,
      rewardMessage: null,
      handleMoreList: null
    };
  },
  methods: {
    handleClick(_0x1f7d04) {
      this.battleEngine.executeCommand(_0x1f7d04);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.battleEngine = new _0x2c19f2(this);
      this.battleEngine.initHandleMoreList();
      this.battleEngine.createBattleStatus();
      this.battleEngine.roundStart();
    });
  },
  beforeDestroy() {
    this.battleEngine.clearAll();
  },
  computed: {
    sceneDetailClass() {
      return ["wild-battle", this.sceneDetail?.klass];
    },
    battleHandleConfig() {
      return {
        list: [{
          name: "automaticCombat",
          klass: "automatic-combat",
          sort: 0
        }, {
          name: "attackSettings",
          klass: "attack-settings",
          sort: 1
        }, {
          name: "attack",
          klass: "attack",
          sort: 2
        }, {
          name: "magic",
          klass: "magic",
          sort: 3
        }, {
          name: "support",
          klass: "support",
          sort: 4
        }, {
          name: "catch",
          klass: "catch",
          sort: 5
        }, {
          name: "prop",
          klass: "prop",
          sort: 6
        }, {
          name: "escape",
          klass: "escape",
          sort: 7
        }]
      };
    },
    monstersRate() {
      if (this.sceneDetail.type === "routine") {
        return _0x9db866.fT.find(_0x135c66 => _0x135c66.mapId === this.sceneDetail.mapId).monsters;
      } else {
        return null;
      }
    },
    monstersDetail() {
      const _0xfe2457 = [];
      for (let _0x2a2372 of this.sceneDetail.monsters) {
        let _0x16539b = _0x9db866.iS.find(_0x427982 => _0x427982.name === _0x2a2372);
        if (_0x16539b) {
          _0xfe2457.push(_0x16539b);
        }
      }
      return _0xfe2457;
    },
    dungeonDetail() {
      if (this.sceneDetail.type === "dungeon") {
        return this.$store.getters.dungeonDetail(this.sceneDetail.title, this.dayjs);
      } else {
        return null;
      }
    },
    complexMagicKlass() {
      if (["magic", "attackSettings"].includes(this.handleMoreContext?.name) && this.handleMoreContext.list?.length > 2) {
        return "complex-magic";
      } else {
        return null;
      }
    }
  }
};
var _0x4abaf8 = _0x272cd6;
var _0x201e93 = (0, _0x2af9ae.A)(_0x4abaf8, _0x4fd81c, _0x5420c7, false, null, null, null);
var _0x4e443b = _0x201e93.exports;
var _0x48eb87 = {
  name: "WildAdvance",
  props: ["curSide"],
  data() {
    return {
      location: null,
      sceneDetail: null,
      wildMaps: _0x115454.GR,
      wildCur: null,
      sceneList: _0x115454.DX,
      sceneCur: null
    };
  },
  methods: {
    hyphenate: _0x56ed16.Tg,
    arrClick(_0x5c9d89) {
      const _0x4b758a = _0x5c9d89 === 0 ? 1 : -1;
      const {
        wildMaps: _0xc4bd74,
        wildCur: _0x29729a
      } = this;
      let _0x45ef5a = _0xc4bd74.find(_0x371d29 => _0x371d29.sort === _0x29729a.sort + _0x4b758a);
      if (_0x45ef5a) {
        this.wildCur = _0x45ef5a;
      }
    },
    sceneClick(_0x282fa3) {
      if (_0x282fa3.prohibit) {
        this.$gameMessage.info(_0x282fa3.detail.name + "暂未开放！");
      } else {
        this.sceneDetail = _0x282fa3.detail;
        this.location = "wildArm";
      }
    },
    sceneChange(_0x1da420) {
      const _0x4c745a = {
        leave: {
          location: null,
          sceneDetail: null
        },
        battle: {
          location: "wildBattle"
        },
        arm: {
          location: "wildArm"
        }
      };
      const _0x3dc7b7 = _0x4c745a[_0x1da420];
      if (_0x3dc7b7) {
        Object.assign(this, _0x3dc7b7);
      }
    }
  },
  computed: {
    curSceneList() {
      return this.sceneList.filter(_0x3cc585 => _0x3cc585.map === this.wildCur?.name);
    },
    wildAdvanceClass() {
      return ["wild-advance", this.wildCur?.klass, {
        "wild-battle": this.location === "wildBattle"
      }];
    },
    btnUpClass() {
      if (this.wildCur.sort === 0) {
        return "btn--up";
      } else {
        return "btn--down";
      }
    },
    fightPet() {
      return this.$store.getters["petModule/fightPet"];
    }
  },
  created() {
    this.wildCur = this.wildMaps.find(_0x58e26d => _0x58e26d.name === "firstWild");
    this.location = null;
    this.sceneDetail = null;
  },
  components: {
    wildArm: _0x2e1158,
    wildBattle: _0x4e443b
  },
  watch: {
    curSide(_0x52d1cb, _0x3c7f66) {
      if (this.location === "wildBattle") {
        if (_0x52d1cb.name === "refresh" && _0x3c7f66.name === "wildAdvance") {
          this.$gameMessage.info("您的宠物" + this.fightPet.name + "正在战斗中，请先脱离战斗(等待)状态才能切换野外场景！");
          return;
        }
      } else {
        if (_0x52d1cb.name === "refresh" && _0x3c7f66.name === "wildAdvance") {
          this.wildCur = this.wildMaps.find(_0x426d16 => _0x426d16.name === "firstWild");
          this.location = null;
          this.sceneDetail = null;
        }
        if (_0x52d1cb.name === "wildAdvance" && _0x3c7f66.name !== "wildAdvance") {
          this.wildCur = this.wildMaps.find(_0x1e3772 => _0x1e3772.name === "firstWild");
          this.location = null;
          this.sceneDetail = null;
        }
        if (_0x52d1cb.name !== "wildAdvance" && _0x3c7f66.name === "wildAdvance") {
          this.$store.commit("petModule/changeFightPetById", {
            handle: "exit"
          });
        }
      }
    }
  }
};
var _0xd78258 = _0x48eb87;
var _0x3fa763 = (0, _0x2af9ae.A)(_0xd78258, _0x2cc076, _0x59ed0f, false, null, null, null);
var _0x91944 = _0x3fa763.exports;