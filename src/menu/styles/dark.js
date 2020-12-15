import create from '../../_styles/utils/create-component-base'
import { changeColor } from 'seemly'
import { baseDark } from '../../_styles/base'
import { iconDark } from '../../icon/styles'
import { tooltipDark } from '../../tooltip/styles'

export default create({
  theme: 'dark',
  name: 'Menu',
  peer: [baseDark, iconDark, tooltipDark],
  getLocalVars (vars) {
    return {
      borderRadius: vars.borderRadius,
      groupTextColor: vars.textColor3Overlay,
      itemColorMatch: changeColor(vars.primaryColor, { alpha: 0.15 }),
      itemTextColor: vars.textColor2Overlay,
      itemTextColorHover: vars.primaryColorHover,
      itemTextColorChildSelected: vars.primaryColor,
      itemTextColorSelected: vars.primaryColor,
      itemExtraTextColor: vars.textColor3Overlay,
      itemExtraTextColorHover: vars.primaryColorHover,
      itemExtraTextColorChildSelected: vars.primaryColor,
      itemExtraTextColorSelected: vars.primaryColor,
      itemIconColor: vars.textColor1Overlay,
      itemIconColorHover: vars.primaryColorHover,
      itemIconColorSelected: vars.primaryColor,
      itemIconColorChildSelected: vars.primaryColor,
      itemIconColorCollapsed: vars.textColor1Overlay,
      borderColorHorizontal: 'transparent',
      submenuArrowColor: vars.primaryColor,
      fontSize: vars.fontSize
    }
  }
})
