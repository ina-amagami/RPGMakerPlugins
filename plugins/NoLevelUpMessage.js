//=============================================================================
// NoLevelUpMessage.js
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
 * @plugindesc レベルアップ時のメッセージを表示しない
 * @author 天神いな
 *
 */

(function () {
 
    Game_Actor.prototype.shouldDisplayLevelUp = function() {
        return false;
    };
    
}());
