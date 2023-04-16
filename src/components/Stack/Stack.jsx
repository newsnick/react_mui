import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import styles from '../../styles/Stack/Stack.module.scss'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

export default function ResponsiveStack({ item1, item2, item3 }) {
  return (
    <div>
      <Stack
        className={styles.stack}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Item className={styles.itembox1}>{item1}</Item>
        <Item className={styles.itembox2}>{item2}</Item>
        <Item className={styles.itembox3}>{item3}</Item>
      </Stack>
    </div>
  )
}
