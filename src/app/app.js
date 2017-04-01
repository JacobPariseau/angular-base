/** Load main angular module -- this needs to be an import so it will happen
    before the rest of the imports run */
import './appModule';

/** Load router */
import 'angular-ui-router';

/** Load modules */
import './login/login.config';
import './profile/profile.config';

/** Load styles */
import '../style/app.css';
