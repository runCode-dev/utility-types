//--------------- Utility Types ------------------

//Partial ----------------------------------------
interface SystemSettings {
    darkMode: boolean;
    notificationEnable: boolean;
    language: string;
}

function updateSystemSettings(newOptions: Partial<SystemSettings>){
    const dafaultSettings: SystemSettings = {
        darkMode: false,
        notificationEnable: false,
        language: "en"
    }

    const updateSettings = { ...dafaultSettings, ...newOptions }

    console.log(updateSettings);

    //...
}

updateSystemSettings({darkMode: true, language: "pt-br"})

//Required ---------------------------------------
interface User {
    name?: string;
    email?: string;
    role?: string;
}

function craeteUser(user: Required<User>){
    return `Usuário ${user.name} foi criado!`
}

craeteUser({name: "Gustavo", email: "contato@runcode.com.br", role: "admin"})

//Readonly ---------------------------------------
interface AppConfig {
    apiKey: string;
    dbConnectionString: string;
    maxUser: number;
}

const config: Readonly<AppConfig> = {
    apiKey: "13SE-C",
    dbConnectionString: "mongoDb://localhost...",
    maxUser: 100
}

config.apiKey = "ER3W-C"

//Record -----------------------------------------
type UserRole = "admin" | "editor" | "viewer";

interface UserPermissions {
    canEdit: boolean;
    canDelete: boolean;
    canViewer: boolean;
}

const userProfiles: Record<UserRole, UserPermissions> = {
    admin: {canEdit: true, canDelete: true, canViewer: true},
    editor: {canEdit: true, canDelete: false, canViewer: true},
    viewer: {canEdit: false, canDelete: false, canViewer: true},
}

//Pick -------------------------------------------
interface User{
    name: string;
    email: string;
    role: string;
}

type userContactInfo = Pick<User, "name" | "email">;

const contact: userContactInfo = {name: "Gustavo", email: "contato@runcode.com,br"}

//Omit -------------------------------------------
interface User{
    name: string;
    email: string;
    role: string;
}

type userWithoutEmail = Omit<User, "email">

const contact: userWithoutEmail = {name: "Gustavo", role: "admin"}