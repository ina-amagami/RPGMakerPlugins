//=============================================================================
// ExpandMessageVar.js
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
 * @plugindesc 変数の中にエスケープ文字を組み込めるようにする
 * 
 * @author 天神いな
 * @help メッセージのエスケープ処理の中で、変数展開の部分を2重で行っています
 *
 */

(function () {
 
    var _Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
    Window_Base.prototype.convertEscapeCharacters = function(text) {
        text = text.replace(/\\/g, '\x1b');
        text = text.replace(/\x1b\x1b/g, '\\');
        text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
            return $gameVariables.value(parseInt(arguments[1]));
        }.bind(this));
        text = text.replace(/\x1bV\[(\d+)\]/gi, function() {
            return $gameVariables.value(parseInt(arguments[1]));
        }.bind(this));
        return _Window_Base_convertEscapeCharacters.call(this, text);
    };
    
}());
