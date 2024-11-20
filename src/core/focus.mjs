export const focusedOnly = (block) => {
  if (!block.children) {
    return block
  }
  const focusedChildren = block.children.map(focusedOnly)
  if (focusedChildren.some((child) => child.focus)) {
    return {
      ...block,
      focus: true,
      children: focusedChildren.filter((child) => child.focus),
    }
  } else {
    return block
  }
}
