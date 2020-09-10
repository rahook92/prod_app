import React from 'react';

const goalButtons = (props) => {

    const checkSymbol = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAABk0lEQVRYhe2VTUsCQRyHn1m9RhAkHfoAHVwjWqlb4Ep9hD5FgnT
    JW/cwwa8RfQK16BboIRuJKDoHCoJ1rN3poGtmmruOG/TyuwzMDPM88//vC/znr0eMmkxc7i0TjRaAHWBOk9EBSi7Rg4Z19DBRoAevAwua4A9RcCPX503EoTs4b3za2b35TOFAUyhndxg+WqBb
    9pnCUY59nSw2zNr+ih8B3Z4PpqUg7cEF7rkfgVnCbWkV5AB86bsEfMHDEvAND0MgEBwgGuDwZm+MjV1Xji2TxUaimomDW/libz9+K9BSkFYYWwoex633XzURKfmBBxEAQFr5WzBSQxKByz6Nw
    KKAilnLmkMSWvAgAp5EOVHNxKWVvxXK2UY5KWkVZKKaiQvci6BwCPYQAsQQkTOzlrWvrYIE6H5eXd891xWA93bYYLxMU3ZdAU+iDC5MeXNdAW2wlzB/Rj9X4DlEXmeygKIUGl5QniggXJED2i
    Hg24bh5CYK1DeO73h9XRVwouBJl6rgCcGpEXE2r9aK97rn/ef35Q1Fj6tdqgZVFwAAAABJRU5ErkJggg==`;
    const minusSymbol = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACFElEQVRIie2WPW/TUBSGn2O7DJSkSTMgQVQVlaE/AUpKZ6hEysRA
    N3ZADIwg+AnsSEhljVDTVN2pqfoP2KJKbelCQj6kLrbvYaBIjhPHTpTA0nc7H/Zz36t7jy5c6h9J0jY23fyCLUEZI+sIi0DxonSCcoRozQ+c7cJa83gi4PODwk1f/TeqPAPshHYjQiWw5HX+
    butobHDna25DLd0CriUtMKKuIJvZUqsa12DFFdr7uRdqaWUMKEBG0S/tb9nncQ0DHV84rQxbWEoZQR4Pct4HbhzOFx0/+M54Tgep6zCzPFv6+SOc7HNke8H7CUIBMh7eu2iyx3HTzS/YmDr
    Jp3dUBb5jLxbuNE/+Jnoc2xJsTAEKYDueXw4nerda5cEUoH8k8jAeDLenBoalcOBEitej3WKZe9mV7sEohI6bLylmP5K+EQ6S76mffp6HlPhN1PEZkAkn1LLctjs3ElUxg9Kn4SDquD4SYTT1
    /DsC1t1pUVWoxYL9wNkGgilw/cC2d2LBhbXmscKnSVMFPoanVh8Y4IrlvAW6E+R2bNM/q/vAV1cap6BPmMyWG1Frc/b++VkiGGCu1NlD9BUMvhdpoYi+zK7+2hlUHP70cXOPFP1M5G6nUEfUP
    M2udmtxDUMnV7bUqlomWELlA+CnABpEthzjLQ+DwgjP28bhfNHx/DIi68Atws9bqKO668841ejpvdR/12+s7qwIA69phQAAAABJRU5ErkJggg==`;
    const deleteSymbol = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAC6klEQVRIie2WPWhTURTHf+fdVCxYl1LNwyrWgigOKoKojeLaj7R
     2EAeLKIq4WEXUwcFvRBA7OFQUB0FHi23ygrjVNlFEHXRxEKXQmERBlAYUm+QdB1tI07yXWIuT/+2ce/7vd87jvvsu/Nc/klRbmAqHVliudKloO7ASaJxaSgJjoI5rzNCyoZHxeQGPd2xdViPm
     rCoHAVOh3EUYwARO24PDY3MGp8Lbd4nqPWBRpQZLlBXVnmAsEfEqsLwWMh2hY6I6MAcoQJ2KPMyEQ71eBWUnnpp0wK+xKuWKane5yWeBk607G43Jv2Vuk5ZTNmDpmoZIIlWcnDWRMfmL8wgFqMu
     5XChNzgCnwqEVwD6PB/TZTlxsJy4qeqUo/2A6j3C9nFGQA8nWnY3FOask2IX3J9P7sXPHRoAa4SrwGSFnsM4AJNu2bUA55uE1xuS7PMEKrR5GgIDluv16HqshksgKXEG5vcQZeaebNtVYlnUX
     CHjbpc0TjLLKBwywJf2y5TDAl9qvN/O5wlmAT/bCkwLr/a3aPKON4iDdEZoA6irAv1pWbu3SyPNPAMm20Gpj8RpYWMGXtZ344umgdFdXc3ZPfrdqf04HZkFgEihU4dPioBScooJUONU0OPxtfP
     fWWgWxB4fHUC5VAU57g4UPFcxP7Gj8PkDgh7mc6QjtBwhmfvQBb/yt8t4brBrzceYtS3oFNB1uWYdwFORasntzvbx6lUPcQ/i9csXxBLvGDPmY+5ZGRt/o733Qj1IDWm8mF1wEsKNPXyDa79V0
     wTXR4sSszZRqD90R4aBn53OQKLeCsfiR4tyss7oghXNAdh65EyYv/mc1wHLn2UdE91DdJ1JJrkBPw+PRdOlC2f+tHU08EuEE4P4VVOV40IlHyy36HhiZ9pZOFblP5dOsVBMi7A1G445Xge8NIx
     hLRChIs8INIF8F0AXuBXKyxg8Kf3C9nbqZdAHtQBMzrrfyAdFYIR+IND4aTlb7zP/6J/oFat/4djal5xYAAAAASUVORK5CYII=`;
    return (
        <div className='buttons'>
            <i onClick={() => {props.deleteGoal(props.goal.id)}}><img id='delete' alt='delete' src={ deleteSymbol } /></i>
            <i onClick={(e) => {props.completeGoal(props.goal.id, props.goal)}}><img id='complete' alt='complete' src={ props.goal.completed === false ? checkSymbol : minusSymbol } /></i>
        </div>
    )
}

export default goalButtons