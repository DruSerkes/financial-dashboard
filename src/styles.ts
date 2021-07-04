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
        },
        info: {
            width: '100%',
            maxWidth: '36ch',
            backgroundColor: theme.palette.background.paper
        },
        inline: {
            display: 'inline'
        },
        nested: {
            paddingLeft: theme.spacing(4)
        },
        topLine: {
            backgroundColor: 'whitesmoke',
            borderRadius: '3px',
            borderBottom: '1px solid lightgrey'
        }
    }),
);