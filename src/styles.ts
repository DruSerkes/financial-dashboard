import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        App: {
            flexGrow: 1,
        },
        main: {
            textAlign: 'center',
            marginTop: theme.spacing(2)
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        }
    }),
);