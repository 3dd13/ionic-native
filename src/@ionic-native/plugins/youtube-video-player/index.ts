import { Plugin, Cordova } from '@ionic-native/core';
/**
 * @name YoutubeVideoPlayer
 * @description
 * Plays YouTube videos in Native YouTube App
 *
 * @usage
 * ```
 * import {YoutubeVideoPlayer} from '@ionic-native/youtube-video-player';
 *
 * YoutubeVideoPlayer.openVideo('myvideoid');
 *
 * ```
 */
@Plugin({
  pluginName: 'YoutubeVideoPlayer',
  plugin: 'https://github.com/Glitchbone/CordovaYoutubeVideoPlayer.git',
  pluginRef: 'YoutubeVideoPlayer',
  repo: 'https://github.com/Glitchbone/CordovaYoutubeVideoPlayer',
  platforms: ['Android', 'iOS']
})
export class YoutubeVideoPlayer {
  /**
   * Plays a YouTube video
   * @param videoId {string} Video ID
   */
  @Cordova({sync: true})
  static openVideo(videoId: string): void { }
}
