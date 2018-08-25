import { PLAYER, BACKGROUND } from '../base/define';

export default class ColorTool {

    public static stone(p: PLAYER): string {
        return p === PLAYER.White ? '#fff' : '#000';
    }

    public static text(p: PLAYER): string {
        return p === PLAYER.White ? '#000' : '#fff';
    }

    public static last(p: PLAYER): string {
        return ColorTool.text(p);
    }

    public static indicator(p: PLAYER): string {
        return p === PLAYER.White ? 'rgba(255,255,255,0.3)' : 'rgba(0, 0, 0, 0.3)';
    }

    public static background(bg: BACKGROUND): string {
        switch (bg) {
            case BACKGROUND.Wood:
                return '#ffcc66';
            case BACKGROUND.White:
                return '#fff';
        }
        return 'transparent';
    }
}
