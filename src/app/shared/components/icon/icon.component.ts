import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
        selector: 'app-icon',
        templateUrl: './icon.component.html',
        styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
        icons = {
                'activity': `<svg id="i-activity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
    <path d="M4 16 L11 16 14 29 18 3 21 16 28 16" />
</svg>`
                , 'alert': `<svg id="i-alert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M16 3 L30 29 2 29 Z M16 11 L16 19 M16 23 L16 25" />
</svg>`
                , 'archive': `<svg id="i-archive" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M4 10 L4 28 28 28 28 10 M2 4 L2 10 30 10 30 4 Z M12 15 L20 15" />
</svg>`
                , 'arrow-bottom': `<svg id="i-arrow-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M6 22 L16 30 26 22 M16 30 L16 2" />
</svg>`
                , 'arrow-left': `<svg id="i-arrow-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M10 6 L2 16 10 26 M2 16 L30 16" />
</svg>`
                , 'arrow-right': `<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M22 6 L30 16 22 26 M30 16 L2 16" />
</svg>`
                , 'arrow-top': `<svg id="i-arrow-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M6 10 L16 2 26 10 M16 2 L16 30" />
</svg>`
                , 'backwards': `<svg id="i-backwards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M16 2 L2 16 16 30 16 16 30 30 30 2 16 16 Z" />
</svg>`
                , 'ban': `<svg id="i-ban" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<circle cx="16" cy="16" r="14" />
<path d="M6 6 L26 26" />
</svg>`
                , 'bell': `<svg id="i-bell" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M8 17 C8 12 9 6 16 6 23 6 24 12 24 17 24 22 27 25 27 25 L5 25 C5 25 8 22 8 17 Z M20 25 C20 25 20 29 16 29 12 29 12 25 12 25 M16 3 L16 6" />
</svg>`
                , 'book': `<svg id="i-book" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M16 7 C16 7 9 1 2 6 L2 28 C9 23 16 28 16 28 16 28 23 23 30 28 L30 6 C23 1 16 7 16 7 Z M16 7 L16 28" />
</svg>`
                , 'bookmark': `<svg id="i-bookmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M6 2 L26 2 26 30 16 20 6 30 Z" />
</svg>`
                , 'calendar': `<svg id="i-calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M2 6 L2 30 30 30 30 6 Z M2 15 L30 15 M7 3 L7 9 M13 3 L13 9 M19 3 L19 9 M25 3 L25 9" />
</svg>`
                , 'camera': `<svg id="i-camera" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M2 8 L 9 8 12 4 20 4 23 8 30 8 30 26 2 26 Z" />
<circle cx="16" cy="16" r="5" />
</svg>`
                , 'caret-bottom': `<svg id="i-caret-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M30 10 L16 26 2 10 Z" />
</svg>`
                , 'caret-left': `<svg id="i-caret-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M22 30 L6 16 22 2 Z" />
</svg>`
                , 'caret-right': `<svg id="i-caret-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M10 30 L26 16 10 2 Z" />
</svg>`
                , 'caret-top': `<svg id="i-caret-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M30 22 L16 6 2 22 Z" />
</svg>`
                , 'cart': `<svg id="i-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M6 6 L30 6 27 19 9 19 M27 23 L10 23 5 2 2 2" />
<circle cx="25" cy="27" r="2" />
<circle cx="12" cy="27" r="2" />
</svg>`
                , 'checkmark': `<svg id="i-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M2 20 L12 28 30 4" />
</svg>`
                , 'chevron-bottom': `<svg id="i-chevron-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M30 12 L16 24 2 12" />
</svg>`
                , 'chevron-left': `<svg id="i-chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M20 30 L8 16 20 2" />
</svg>`
                , 'chevron-right': `<svg id="i-chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M12 30 L24 16 12 2" />
</svg>`
                , 'chevron-top': `<svg id="i-chevron-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M30 20 L16 8 2 20" />
</svg>`
                , 'clock': `<svg id="i-clock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<circle cx="16" cy="16" r="14" />
<path d="M16 8 L16 16 20 20" />
</svg>`
                , 'close': `<svg id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M2 30 L30 2 M30 30 L2 2" />
</svg>`
                , 'code': `<svg id="i-code" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27" />
</svg>`
                , 'compose': `<svg id="i-compose" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
</svg>`
                , 'creditcard': `<svg id="i-creditcard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M2 7 L2 25 30 25 30 7 Z M5 18 L9 18 M5 21 L11 21" />
<path d="M2 11 L2 13 30 13 30 11 Z" fill="currentColor" />
</svg>`
                , 'download': `<svg id="i-download" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 26 L16 30 21 26 M16 16 L16 30" />
</svg>`
                , 'edit': `<svg id="i-edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M30 7 L25 2 5 22 3 29 10 27 Z M21 6 L26 11 Z M5 22 L10 27 Z" />
</svg>`
                , 'eject': `<svg id="i-eject" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M30 18 L16 5 2 18Z M2 25 L30 25" />
</svg>`
                , 'ellipsis-horizontal': `<svg id="i-ellipsis-horizontal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<circle cx="7" cy="16" r="2" />
<circle cx="16" cy="16" r="2" />
<circle cx="25" cy="16" r="2" />
</svg>`
                , 'ellipsis-vertical': `<svg id="i-ellipsis-vertical" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<circle cx="16" cy="7" r="2" />
<circle cx="16" cy="16" r="2" />
<circle cx="16" cy="25" r="2" />
</svg>`
                , 'end': `<svg id="i-end" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M24 2 L24 16 10 2 10 30 24 16 24 30" />
</svg>`
                , 'export': `<svg id="i-export" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 12 L16 4 24 12" />
</svg>`
                , 'external': `<svg id="i-external" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18" />
</svg>`
                , 'eye': `<svg id="i-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<circle cx="17" cy="15" r="1" />
<circle cx="16" cy="16" r="6" />
<path d="M2 16 C2 16 7 6 16 6 25 6 30 16 30 16 30 16 25 26 16 26 7 26 2 16 2 16 Z" />
</svg>`
                , 'file': `<svg id="i-file" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M6 2 L6 30 26 30 26 10 18 2 Z M18 2 L18 10 26 10" />
</svg>`
                , 'fire': `<svg id="i-fire" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M15 30 C0 30 15 13 12 3 28 13 32 30 15 30 Z M17 30 C10 30 17 20 17 20 17 20 24 30 17 30 Z" />
</svg>`
                , 'flag': `<svg id="i-flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M6 2 L6 30 M6 6 L26 6 20 12 26 18 6 18" />
</svg>`
                , 'folder-open': `<svg id="i-folder-open" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M4 28 L28 28 30 12 14 12 10 8 2 8 Z M28 12 L28 4 4 4 4 8" />
</svg>`
                , 'folder': `<svg id="i-folder" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M2 26 L30 26 30 7 14 7 10 4 2 4 Z M30 12 L2 12" />
</svg>`
                , 'forwards': `<svg id="i-forwards" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M16 2 L30 16 16 30 16 16 2 30 2 2 16 16 Z" /> 
</svg>`
                , 'gift': `<svg id="i-gift" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M4 14 L4 30 28 30 28 14 M2 9 L2 14 30 14 30 9 Z M16 9 C 16 9 14 0 8 3 2 6 16 9 16 9 16 9 18 0 24 3 30 6 16 9 16 9 M16 9 L16 30" />
</svg>`
                , 'github': `<svg id="i-github" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" >
<path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />
</svg>`
                , 'heart': `<svg id="i-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
    <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
</svg>`
                , 'home': `<svg id="i-home" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M12 20 L12 30 4 30 4 12 16 2 28 12 28 30 20 30 20 20 Z" />
</svg>`
                , 'import': `<svg id="i-import" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M28 22 L28 30 4 30 4 22 M16 4 L16 24 M8 16 L16 24 24 16" />
</svg>`
                , 'inbox': `<svg id="i-inbox" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M2 15 L2 25 30 25 30 15 26 7 6 7 Z M2 15 L10 15 C10 15 11 20 16 20 21 20 22 15 22 15 L30 15" />
</svg>`
                , 'info': `<svg id="i-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M16 14 L16 23 M16 8 L16 10" />
<circle cx="16" cy="16" r="14" />
</svg>`
                , 'lightning': `<svg id="i-lightning" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M18 13 L26 2 8 13 14 19 6 30 24 19 Z" />
</svg>`
                , 'link': `<svg id="i-link" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M18 8 C18 8 24 2 27 5 30 8 29 12 24 16 19 20 16 21 14 17 M14 24 C14 24 8 30 5 27 2 24 3 20 8 16 13 12 16 11 18 15" />
</svg>`
                , 'location': `<svg id="i-location" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<circle cx="16" cy="11" r="4" />
<path d="M24 15 C21 22 16 30 16 30 16 30 11 22 8 15 5 8 10 2 16 2 22 2 27 8 24 15 Z" />
</svg>`
                , 'lock': `<svg id="i-lock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M5 15 L5 30 27 30 27 15 Z M9 15 C9 9 9 5 16 5 23 5 23 9 23 15 M16 20 L16 23" />
<circle cx="16" cy="24" r="1" />
</svg>`
                , 'mail': `<svg id="i-mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M2 26 L30 26 30 6 2 6 Z M2 6 L16 16 30 6" />
</svg>`
                , 'menu': `<svg id="i-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24" />
</svg>`
                , 'message': `<svg id="i-msg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M2 4 L30 4 30 22 16 22 8 29 8 22 2 22 Z" />
</svg>`
                , 'minus': `<svg id="i-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M2 16 L30 16" />
</svg>`
                , 'music': `<svg id="i-music" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M11 25 L11 6 24 3 24 23 M11 13 L24 10" />
<ellipse cx="7" cy="25" rx="4" ry="5" />
<ellipse cx="20" cy="23" rx="4" ry="5" />
</svg>`
                , 'mute': `<svg id="i-mute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M20 16 C20 8 15 2 15 2 L8 10 2 10 2 22 8 22 15 30 C15 30 20 24 20 16 Z" />
</svg>`
                , 'options': `<svg id="i-options" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M28 6 L4 6 M28 16 L4 16 M28 26 L4 26 M24 3 L24 9 M8 13 L8 19 M20 23 L20 29" />
</svg>`
                , 'paperclip': `<svg id="i-paperclip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M10 9 L10 24 C10 28 13 30 16 30 19 30 22 28 22 24 L22 6 C22 3 20 2 18 2 16 2 14 3 14 6 L14 23 C14 24 15 25 16 25 17 25 18 24 18 23 L18 9" />
</svg>`
                , 'pause': `<svg id="i-pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M23 2 L23 30 M9 2 L9 30" />
</svg>`
                , 'photo': `<svg id="i-photo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M20 24 L12 16 2 26 2 2 30 2 30 24 M16 20 L22 14 30 22 30 30 2 30 2 24" />
<circle cx="10" cy="9" r="3" />
</svg>`
                , 'play': `<svg id="i-play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M10 2 L10 30 24 16 Z" />
</svg>`
                , 'plus': `<svg id="i-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M16 2 L16 30 M2 16 L30 16" />
</svg>`
                , 'portfolio': `<svg id="i-portfolio" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M29 17 L29 28 3 28 3 17 M2 8 L30 8 30 16 C30 16 24 20 16 20 8 20 2 16 2 16 L2 8 Z M16 22 L16 18 M20 8 C20 8 20 4 16 4 12 4 12 8 12 8" />
</svg>`
                , 'print': `<svg id="i-print" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M7 25 L2 25 2 9 30 9 30 25 25 25 M7 19 L7 30 25 30 25 19 Z M25 9 L25 2 7 2 7 9 M22 14 L25 14" />
</svg>`
                , 'reload': `<svg id="i-reload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2" />
</svg>`
                , 'reply': `<svg id="i-reply" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M10 6 L3 14 10 22 M3 14 L18 14 C26 14 30 18 30 26" />
</svg>`
                , 'search': `<svg id="i-search" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <circle cx="14" cy="14" r="12" />
                <path d="M23 23 L30 30"  />
            </svg>`
                , 'send': `<svg id="i-send" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M2 16 L30 2 16 30 12 20 Z M30 2 L12 20" />
</svg>`
                , 'settings': `<svg id="i-settings" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M13 2 L13 6 11 7 8 4 4 8 7 11 6 13 2 13 2 19 6 19 7 21 4 24 8 28 11 25 13 26 13 30 19 30 19 26 21 25 24 28 28 24 25 21 26 19 30 19 30 13 26 13 25 11 28 8 24 4 21 7 19 6 19 2 Z" />
<circle cx="16" cy="16" r="4" />
</svg>`
                , 'star': `<svg id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
</svg>`
                , 'start': `<svg id="i-start" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M8 2 L8 16 22 2 22 30 8 16 8 30" />
</svg>`
                , 'tag': `<svg id="i-tag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<circle cx="24" cy="8" r="2" />
<path d="M2 18 L18 2 30 2 30 14 14 30 Z" />
</svg>`
                , 'trash': `<svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" />
</svg>`
                , 'twitter': `<svg id="i-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" >
<path stroke-width="0" fill="currentColor" d="M60 16 L54 17 L58 12 L51 14 C42 4 28 15 32 24 C16 24 8 12 8 12 C8 12 2 21 12 28 L6 26 C6 32 10 36 17 38 L10 38 C14 46 21 46 21 46 C21 46 15 51 4 51 C37 67 57 37 54 21 Z" />
</svg>`
                , 'unlock': `<svg id="i-unlock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M5 15 L5 30 27 30 27 15 Z M9 15 C9 7 9 3 16 3 23 3 23 8 23 9 M16 20 L16 23" />
<circle cx="16" cy="24" r="1" />
</svg>`
                , 'upload': `<svg id="i-upload" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M9 22 C0 23 1 12 9 13 6 2 23 2 22 10 32 7 32 23 23 22 M11 18 L16 14 21 18 M16 14 L16 29" />
</svg>`
                , 'user': `<svg id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
</svg>`
                , 'video': `<svg id="i-video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M22 13 L30 8 30 24 22 19 Z M2 8 L2 24 22 24 22 8 Z" />
</svg>`
                , 'volume': `<svg id="i-volume" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M20 16 C20 8 15 2 15 2 L8 10 2 10 2 22 8 22 15 30 C15 30 20 24 20 16 Z M21 2 C21 2 25 6 25 16 25 26 21 30 21 30 M27 4 C27 4 30 8 30 16 30 24 27 28 27 28" />
</svg>`
                , 'work': `<svg id="i-work" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentcolor" stroke-linecap="butt" stroke-linejoin="miter" stroke-width="6.25%">
<path d="M30 8 L2 8 2 26 30 26 Z M20 8 C20 8 20 4 16 4 12 4 12 8 12 8 M8 26 L8 8 M24 26 L24 8" />
</svg>`,
                'instagram': `<svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 32 32"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
                'facebook': `<svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 32 32"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>`,
                'linkedin': `<svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 32 32"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
                'linkedin2': `<svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>`
        };
        @Input() type: string;
        @Input() width = 32;
        @Input() class: string;
        @Input() stroke = '4.6875%';
        @Input() active = false;
        selectedIcon: SafeHtml;
        constructor(private sanitize: DomSanitizer) {

        }

        ngOnInit() {
                let selectedIconStr = this.icons[this.type];
                if (selectedIconStr !== undefined) {
                        // selectedIconStr = selectedIconStr.replace('width="32"', 'width="' + this.width + '"');
                        // selectedIconStr = selectedIconStr.replace('height="32"', 'height="' + this.width + '"');
                        selectedIconStr = selectedIconStr.replace('stroke-width="6.25%"', 'stroke-width="' + this.stroke + '"');
                }
                this.selectedIcon = this.sanitize.bypassSecurityTrustHtml(selectedIconStr);

        }



}
