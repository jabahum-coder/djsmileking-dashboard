import Vue from 'vue'
import Router from 'vue-router'

import AllAudio from 'views/AllAudio'
import AudioAudio from 'views/AudioAudio'
import PlayAudio from 'views/PlayAudio'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/allAudio',
            name: 'All Audio', component: AllAudio
        },
        {
            path: '/addAudio',
            name: 'Add Audio', component: AudioAudio
        },
        {
            path: '/playAudio',
            name: 'Play Audio', component: PlayAudio
        }
    ]
});