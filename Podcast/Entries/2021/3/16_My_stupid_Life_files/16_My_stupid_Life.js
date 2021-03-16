// Created by iWeb 3.0.2 local-build-20210316

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id3" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="169" height="316" style="height: 316px; left: 266px; position: absolute; top: 20px; width: 169px; z-index: 1; "><param name="src" value="../../../../Media/IMG_0322.MOV" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id3" type="video/quicktime" width="169" height="316" style="height: 316px; left: 266px; position: absolute; top: 20px; width: 169px; z-index: 1; "><param name="src" value="16_My_stupid_Life_files/IMG_0322.jpg"/><param name="target" value="myself"/><param name="href" value="../../../../../Media/IMG_0322.MOV"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id3" type="video/quicktime" width="169" height="316" data="../../../../Media/IMG_0322.MOV" style="height: 316px; left: 266px; position: absolute; top: 20px; width: 169px; z-index: 1; "><param name="src" value="../../../../Media/IMG_0322.MOV"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{dynamicallyPopulate();loadMozillaCSS('16_My_stupid_Life_files/16_My_stupid_LifeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');Widget.onload();fixAllIEPNGs('../../../../Media/transparent.gif');fixupIECSS3Opacity('id5');BlogFixupPreviousNext();performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
