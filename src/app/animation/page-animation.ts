import { state, style, trigger } from "@angular/animations";

export const PageAnimation = [
    // Introduction
    trigger('introNavState', [
        state('istatic', style({
            transform: 'translateX(0)',
            transition: 'all .3s'
        })),
        state('itransition', style({
            transform: 'translateY(-550%)',
            transition: 'all .3s'
        }))
      ]),
      trigger('introTitleState', [
        state('istart', style({
            opacity: '0',
            position: 'relative',
            top: '5em',
            transition: 'all .4s'
        })),
        state('iend', style({
            opacity: '1',
            position: 'relative',
            top: '0',
            transition: 'all .4s'
        }))
      ]),
    // Portfolio
    trigger('portfoNavState', [
        state('pstatic', style({
            transform: 'translateX(0)',
            transition: 'all .3s'
        })),
        state('ptransition', style({
            transform: 'translateY(-550%)',
            transition: 'all .3s'
        }))
      ]),
      trigger('portfoTitleState', [
        state('pstart', style({
            opacity: '0',
            position: 'relative',
            top: '5em',
            transition: 'all .4s'
        })),
        state('pend', style({
            opacity: '1',
            position: 'relative',
            top: '-6rem',
            transition: 'all .4s'
        }))
      ]),
    // Next-Step
    trigger('nextNavState', [
        state('nstatic', style({
            transform: 'translateX(0)',
            transition: 'all .3s'
        })),
        state('ntransition', style({
            transform: 'translateY(-550%)',
            transition: 'all .3s'
        }))
      ]),
      trigger('nextTitleState', [
        state('nstart', style({
            opacity: '0',
            position: 'relative',
            top: '5em',
            transition: 'all .4s'
        })),
        state('nend', style({
            opacity: '1',
            position: 'relative',
            top: '-12rem',
            transition: 'all .4s'
        }))
      ])
]