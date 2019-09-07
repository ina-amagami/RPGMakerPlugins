//=============================================================================
// AddBattleLogSkillTargetName.js
//
// Copyright (c) 2019 ina-amagami (ina@amagamina.jp)
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//
// GitHub  : https://github.com/ina-amagami/
// Blog    : https://amagamina.jp
// Twitter : https://twitter.com/ina_amagami
//=============================================================================

/*:
 * @plugindesc スキル実行メッセージでターゲット名を使用可能にする
 * @author 天神いな
 *
 * @help スキル実行メッセージはスキル名のみ組み込み可能ですが、
 * 本プラグインを導入することでターゲット名を組み込めるようになります。
 *
 * 【使い方】
 * 　メッセージ内に以下のフォーマット文字を入れて下さい。
 * 　スキル名　　：%1
 * 　ターゲット名：%2
 *
 * 【注意点】
 *  ・対象が単体の場合のみ対応しています。
 *  ・バトルログを拡張する他のプラグインと競合する可能性があります。
 */

(function () {

    Window_BattleLog.prototype.startAction = function(subject, action, targets) {
        var item = action.item();
        this.push('performActionStart', subject, action);
        this.push('waitForMovement');
        this.push('performAction', subject, action);
        this.push('showAnimation', subject, targets.clone(), item.animationId);
        this.displayAction(subject, item, targets);
    };
    Window_BattleLog.prototype.displayAction = function(subject, item, targets) {
        var numMethods = this._methods.length;
        if (DataManager.isSkill(item)) {
            if (item.message1) {
                this.push('addText', subject.name() + item.message1.format(item.name, targets[0].name()));
            }
            if (item.message2) {
                this.push('addText', item.message2.format(item.name, targets[0].name()));
            }
        } else {
            this.push('addText', TextManager.useItem.format(subject.name(), item.name));
        }
        if (this._methods.length === numMethods) {
            this.push('wait');
        }
    };
    
}());
