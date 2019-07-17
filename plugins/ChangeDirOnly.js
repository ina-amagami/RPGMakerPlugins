//=============================================================================
// ChangeDirOnly.js
//
// Copyright (c) 2019 ina-amagami (ina@amagamina.jp)
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//
// GitHub  : https://github.com/ina-amagami
// Blog    : https://amagamina.jp
// Twitter : https://twitter.com/ina_amagami
//=============================================================================

/*:ja
 * @plugindesc 特定キーを押しながら移動しようとすると向き変更だけになる
 * @author 天神いな
 *
 * @param KeyCode
 * @desc キーコード（デフォルトはCキー）
 * @default 67
 *
 * @help キーコード一覧
 * http://faq.creasus.net/04/0131/CharCode.html
 *
 */

(function() {

    var parameters = PluginManager.parameters('ChangeDirOnly');
    var keyCode = Number(parameters["KeyCode"]);

    var changeDirKeyCodeName = 'changedir';
    if (Input.keyMapper[keyCode])
    {
        changeDirKeyCodeName = Input.keyMapper[keyCode];
    }
    else
    {
        Input.keyMapper[keyCode] = changeDirKeyCodeName;
    }
    
    var _Game_Player_executeMove = Game_Player.prototype.executeMove;
    Game_Player.prototype.executeMove = function(direction) {
        if (Input.isPressed(changeDirKeyCodeName)) {
            this.setDirection(direction);
        } else {
            _Game_Player_executeMove.apply(this, arguments);
        }
    };
    
}());
